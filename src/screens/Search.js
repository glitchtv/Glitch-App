import React, { Component } from "react";
import Icon from "@builderx/icons";

import ChosenTag from "../symbols/ChosenTag";
import TagRow from "../symbols/TagRow";

import { Center } from "@builderx/utils";
import { View, StyleSheet, FlatList, Text } from "react-native";

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
        <Text style={styles.label}>Genres</Text>
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect4}>
                <TagRow style={styles.tagRow2} />
              </View>
            );
          }}
          horizontal={false}
        />
        <Text style={styles.text}>Status</Text>
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
    top: 651,

    height: 31,
    width: 103,
    left: "0%"
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
  },
  label: {
    top: 99,
    left: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  list2: {
    top: 490,
    left: 20,
    width: 319,
    height: 152.59,
    position: "absolute"
  },
  rect4: {
    height: 31,
    alignSelf: "stretch",
    marginBottom: 7
  },
  tagRow2: {
    top: 0,
    left: "0%",
    width: 321,
    height: 31,
    position: "absolute"
  },
  text: {
    top: 470,
    left: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  }
});
