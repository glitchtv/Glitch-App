import React, { Component } from "react";
import Icon from "@builderx/icons";

import AnimeRow from "../symbols/AnimeRow";
import { Center } from "@builderx/utils";
import ChosenTag from "../symbols/ChosenTag";

import { View, StyleSheet, FlatList, Dimensions, StatusBar } from "react-native";

var { width, height } = Dimensions.get('window')

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))
let chunks = (arr, n) => arr.reduce((all, one, i) => {
  const ch = Math.floor(i / n)
  all[ch] = [].concat((all[ch] || []), one)
  return all
}, []);

export default class SearchTags extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params
  }
  render() {
    let log = logger("Filter Results")
    let data = this.state
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true} />
        <Icon onPress={() => this.props.navigation.goBack()} name="ios-close" style={styles.icon} type="Ionicons" />
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeRow navigation={this.props.navigation} style={styles.animeRow} data={item} />
              </View>
            );
          }}
          data={chunks(data.animes.filter(anime => data.search.genres.every(g => anime.genre.indexOf(g) > -1) && (data.search.status.length == 0 || data.search.status.indexOf(anime.status) > -1)), 2)}
          horizontal={false}
        />
        <Center horizontal>
          <FlatList
            style={styles.list2}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect2}>
                  <ChosenTag style={styles.chosenTag} handler={i => {
                    log("Chose " + i)
                    if (data.filters.genres.indexOf(i) > -1) {
                      let g = this.state.search.genres
                      if (g.indexOf(i) > -1) g = g.filter(_ => _ != i)
                      else g.push(i)
                      this.setState({
                        search: {
                          genres: g,
                          status: this.state.search.status
                        }
                      })
                    } else if (data.filters.status.indexOf(i) > -1) {
                      let s = this.state.search.status
                      if (s.indexOf(i) > -1) s = s.filter(_ => _ != i)
                      else s.push(i)
                      this.setState({
                        search: {
                          status: s,
                          genres: this.state.search.genres
                        }
                      })
                    }
                  }} text={item} />
                </View>
              );
            }}
            data={data.search.genres.concat(data.search.status)}
            horizontal={true}
          />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    flex: 1
  },

  icon: {
    top: 12,
    left: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  list: {
    position: "absolute",
    width: width,
    height: "86%",
    top: 118
  },
  rect: {
    height: width * 0.65,
    alignSelf: "stretch",
    marginBottom: 10
  },
  animeRow: {
    top: 0,
    left: "6.11%",
    width: width * 0.9,
    height: width * 0.65,
    position: "absolute"
  },
  list2: {
    position: "absolute",
    width: "93.61111111111111%",
    height: 45,
    top: 62,
  },
  rect2: {
    width: width * .3,
    height: 45,
    marginRight: 5
  },
  chosenTag: {
    top: 0,
    left: 0,
    width: width * .3,
    height: 45,
    position: "absolute"
  }
});
