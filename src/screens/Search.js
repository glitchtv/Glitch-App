import React, { Component } from "react";
import Icon from "@builderx/icons";

import ChosenTag from "../symbols/ChosenTag";
import TagRow from "../symbols/TagRow";

import { View, StyleSheet, FlatList } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon name="ios-close" style={styles.icon} type="Ionicons" />
        <ChosenTag style={styles.chosenTag} />
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect3}>
                <TagRow style={styles.tagRow} />
              </View>
            );
          }}
          horizontal={false}
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
  chosenTag: {
    position: "absolute",
    top: 73,
    left: 51,
    height: 31,
    width: 102
  },
  tagRow: {
    position: "absolute",
    top: 0,
    left: "0%",
    height: 31,
    width: 321
  },
  list: {
    position: "absolute",
    width: 320,
    height: 341.49,
    top: 120,
    left: 19
  },
  rect3: {
    height: 31,
    alignSelf: "stretch",
    marginBottom: 7
  }
});
