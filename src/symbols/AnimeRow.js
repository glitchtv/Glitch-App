import React, { Component } from "react";
import AnimeCard from "./AnimeCard";
import { View, FlatList, StyleSheet } from "react-native";

export default class AnimeRow extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 318,
    height: 240
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeCard style={styles.animeCard} animeTitle genre />
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
  list: {
    width: 318,
    height: 240
  },
  rect: {
    width: 146,
    height: 241,
    marginRight: 23
  },
  animeCard: {
    top: 0,
    left: 0,
    width: 146,
    height: 241,
    position: "absolute"
  }
});
