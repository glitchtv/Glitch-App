import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";

import Search from "./src/screens/Search";
import SearchText from "./src/screens/SearchText";
import SearchTags from "./src/screens/SearchTags";
import AnimeInfo from "./src/screens/AnimeInfo";
import Episodes from "./src/screens/Episodes";
import { StackNavigator } from "react-navigation";

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))
var getAllMatches = (ptn, text) => {
  let matches = []
  let output = []
  while (matches = ptn.exec(text)) output.push(matches[1].replace(/^,/g, '').trim())
  return output
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
    for (let page = 1; page < 2; page++) { //TODO: change page to 6 in prod
      log("Fetching " + url + page)
      let s = await fetch(url + page).catch((e) => console.error(e))
      log("Got response.")
      let d = await s.text()
      log("Converted to text")
      animes = animes.concat(getAnimes(d, log))
      log("Finished parsing animes.")
    }
    let genres = []
    animes.forEach(anime => anime.genre.forEach(genre => genres.push(genre)))
    genres = [...new Set(genres)]
    let years = [...new Set(animes.map(_ => _.year))]
    let status = [...new Set(animes.map(_ => _.status))]
    console.info({
      animes: animes,
      filters: {
        genres: genres,
        years: years,
        status: status
      }
    })
    this.setState({
      animes: animes,
      filters: {
        genres: genres,
        years: years,
        status: status
      }
    })
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") // TODO: change this to roboto
    });
    await this.updateAnimeList.bind(this)()
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
        }
      },
      {
        headerMode: "none",
        initialRouteName: "Search",
        initialRouteParams: {
          animes: this.state.animes,
          filters: this.state.filters
        }
      }
    )
    return this.state.loaded ? <StackNavigation /> : <Splash />;
  }
}
