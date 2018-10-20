import React from "react";
import { YellowBox } from "react-native";
import { Font, FileSystem } from "expo";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";

import Search from "./src/screens/Search";
import SearchText from "./src/screens/SearchText";
import SearchTags from "./src/screens/SearchTags";
import AnimeInfo from "./src/screens/AnimeInfo";
import Episodes from "./src/screens/Episodes";
import Watch from "./src/screens/Watch";
import { StackNavigator } from "react-navigation";
import cache from './cache'

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))
var getAllMatches = (ptn, text) => {
  let matches = []
  let output = []
  while (matches = ptn.exec(text)) output.push(matches[1].replace(/^,/g, '').trim())
  return output
}
var lev = (function () {

	/**
	 * @param String a
	 * @param String b
	 * @return Array
	 */
	function levenshteinenator(a, b) {
		var cost;
		var m = a.length;
		var n = b.length;

		// make sure a.length >= b.length to use O(min(n,m)) space, whatever that is
		if (m < n) {
			var c = a; a = b; b = c;
			var o = m; m = n; n = o;
		}

		var r = []; r[0] = [];
		for (var c = 0; c < n + 1; ++c) {
			r[0][c] = c;
		}

		for (var i = 1; i < m + 1; ++i) {
			r[i] = []; r[i][0] = i;
			for ( var j = 1; j < n + 1; ++j ) {
				cost = a.charAt( i - 1 ) === b.charAt( j - 1 ) ? 0 : 1;
				r[i][j] = minimator( r[i-1][j] + 1, r[i][j-1] + 1, r[i-1][j-1] + cost );
			}
		}

		return r;
	}

	/**
	 * Return the smallest of the three numbers passed in
	 * @param Number x
	 * @param Number y
	 * @param Number z
	 * @return Number
	 */
	function minimator(x, y, z) {
		if (x <= y && x <= z) return x;
		if (y <= x && y <= z) return y;
		return z;
	}

	return levenshteinenator;

}());
var levDist = (a, b) => {
  let distArray = lev(a, b)
  return distArray[ distArray.length - 1 ][ distArray[ distArray.length - 1 ].length - 1 ]
}
var getAnimes = (html, log) => {
  let matches = [], output = [], lookups = []
  log("Parsing content")
  let pattern = /(?:<li title=')(<div.*)('>)/g
  let tags = getAllMatches(pattern, html)
  log("Received tags")
  pattern = /(?:href=")(\/category\/.*)(?:" .*>)(.*)(?:<\/a>)/g
  while (matches = pattern.exec(html)) lookups.push({
    title: matches[2].trim(),
    link: matches[1]
  })
  log("Received links")
  output = tags.map(tag => {
    let imgPattern = /(?:<img src=")(https:\/\/cdnimg.xyz.*)(?:" onerror="this.className)/g
    let titlePattern = /(?:href="">)(.*)(?:<\/a><p)/g
    let genrePattern = /(?:title="[\w|\s]+">)([^<]*)(?:<\/a>)/g
    let yearPattern = /(?:<span>Released: <\/span>)([0-9]+)/g
    let statusPattern = /(?:<span>Status: <\/span>)([^<]*)/g
    let plotPattern = /(?:<span>Plot Summary: <\/span>)([^<]*)/g
    let match = ptn => getAllMatches(ptn, tag)
    return {
      image: match(imgPattern)[0],
      title: match(titlePattern)[0],
      genre: match(genrePattern),
      year: match(yearPattern)[0],
      status: match(statusPattern)[0],
      plot: match(plotPattern)[0],
    }
  })
  log("Parsed tags")
  let getLink = anime => lookups.filter(_ => _.title == anime.title)
  output = output.map(anime => {
    let link = getLink(anime)
    anime.link = link.length > 0 ? link[0].link : ''
    return anime
  })
  log("Matched with lookup table")
  return output
}

var getAnimesTwist = (html) => {
  let result = html.slice(html.indexOf('window.__NUXT__='))
  result = result.slice(result.indexOf('=') + 1, result.indexOf('</script') - 1)
  let data = JSON.parse(result)
  return data.state.anime.all
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      animes: [],
      filters: {
        genres: [],
        years: [],
        status: []
      }
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated",
      "Remote debugger is in a background tab which may cause apps to perform slowly",
      "VirtualizedList: missing keys for items"
    ]);
  }
  async updateAnimeList() {
    let log = logger("Anime List Updater")
    let animes = []
    log("Starting")
    let url = 'https://www1.gogoanime.sh/anime-list.html?page='
    for (let page = 1; page < 44; page++) { //TODO: change page to 6 in prod
      log("Fetching " + url + page)
      let s = await fetch(url + page).catch((e) => console.error(e))
      log("Got response.")
      if (!s) console.log("FUCKING HELL")
      let d = await s.text().catch((e) => console.error(e))
      log("Converted to text")
      animes = animes.concat(getAnimes(d, log))
      log("Finished parsing animes.")
    }
    let vidUrl = 'https://twist.moe'
    log("Querying Twist")
    let vidS = await fetch(vidUrl).catch((e) => e?console.error(e):0)
    log("Got response.")
    if (!vidS) console.log("FUCKING HELL")
    let vidD = await vidS.text().catch((e) => e? console.error(e) : 0)
    log("Converted to text")
    let twistAnimes = getAnimesTwist(vidD)
    log(twistAnimes.length)
    let supportedAnimes = animes.filter(a => twistAnimes.filter(b => levDist(a.title, b.title) < 4).length > 0)
    log(supportedAnimes.length)
    animes = supportedAnimes.map(a => {
      a.twist = twistAnimes.filter(b => levDist(a.title, b.title) < 4).map(b => {
        b.dist = levDist(a.title, b.title)
        return b
      })
      if (a.twist.length == 0) return null;
      let max = a.twist.reduce(function(prev, current) {
        return (prev.dist < current.dist) ? prev : current
      }) 
      a.twist = max
      return a
    }).filter(_ => _)
    let genres = []
    animes.forEach(anime => anime.genre.forEach(genre => genres.push(genre)))
    genres = [...new Set(genres)]
    let years = [...new Set(animes.map(_ => _.year))]
    let status = [...new Set(animes.map(_ => _.status))]
    this.setState({
      animes: animes,
      filters: {
        genres: genres,
        years: years,
        status: status
      }
    })
    let TO_CACHE = JSON.stringify({
      animes: animes,
      filters: {
        genres: genres,
        years: years,
        status: status
      }
    })
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'glitchLibrary.json', TO_CACHE)
    console.log("Wrote cache")
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") // TODO: change this to roboto
    });
    //if (cache) this.updateAnimeList.bind(this)();
    // else await this.updateAnimeList.bind(this)();
    if (cache) this.setState(cache)
    this.setState({ loaded: true });
  }
  render() {
    let StackNavigation = StackNavigator(
      {
        Splash: {
          screen: Splash
        },
        Home: {
          screen: Home
        },
        Search: {
          screen: Search
        },
        SearchText: {
          screen: SearchText
        },
        SearchTags: {
          screen: SearchTags
        },
        AnimeInfo: {
          screen: AnimeInfo
        },
        Episodes: {
          screen: Episodes
        },
        Watch: {
          screen: Watch
        }
      },
      {
        headerMode: "none",
        initialRouteName: "Home",
        initialRouteParams: {
          animes: this.state.animes,
          filters: this.state.filters
        }
      }
    )
    return this.state.loaded ? <StackNavigation /> : <Splash />;
  }
}
