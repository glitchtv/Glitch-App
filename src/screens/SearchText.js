import React, { Component } from "react";
import Icon from "@builderx/icons";

import { Center } from "@builderx/utils";
import AnimeRow from "../symbols/AnimeRow";

import { View, StyleSheet, TextInput, FlatList } from "react-native";

export default class SearchText extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon name="ios-close" style={styles.icon} type="Ionicons" />
        <Center horizontal>
          <TextInput
            placeholder="Type to search..."
            style={styles.searchbar}
            selectionColor="rgba(191,10,116,1)"
            placeholderTextColor="rgba(102,102,102,1)"
          />
        </Center>
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

  searchbar: {
    height: 37,
    width: 257,
    top: 51,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    borderBottomColor: "rgba(255,255,255,1)",
    borderBottomWidth: 1
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
    alignSelf: "stretch"
  },
  animeRow: {
    top: 0,
    left: "0%",
    width: 318,
    height: 240,
    position: "absolute"
  }
});
