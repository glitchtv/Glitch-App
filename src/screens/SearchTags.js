import React, { Component } from "react";
import Icon from "@builderx/icons";

import AnimeRow from "../symbols/AnimeRow";
import { Center } from "@builderx/utils";
import ChosenTag from "../symbols/ChosenTag";

import { View, StyleSheet, FlatList } from "react-native";

export default class SearchTags extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon name="ios-close" style={styles.icon} type="Ionicons" />
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeRow style={styles.animeRow} />
              </View>
            );
          }}
          horizontal={false}
        />
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <ChosenTag style={styles.chosenTag} text2 />
              </View>
            );
          }}
          horizontal={true}
        />
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
    width: 318,
    height: "83.47222222222223%",
    top: 118,
    left: "6.11%"
  },
  rect: {
    height: 240,
    alignSelf: "stretch",
    marginBottom: 10
  },
  animeRow: {
    top: 0,
    left: "0%",
    width: 318,
    height: 240,
    position: "absolute"
  },
  list2: {
    position: "absolute",
    width: "93.61111111111111%",
    height: 31,
    top: 62,
    left: 23
  },
  rect2: {
    width: 103,
    height: 31,
    marginRight: 5
  },
  chosenTag: {
    top: 0,
    left: 0,
    width: 103,
    height: 31,
    position: "absolute"
  }
});
