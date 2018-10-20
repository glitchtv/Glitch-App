import React, { Component } from "react";
import AnimeCard from "./AnimeCard";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
var { width, height } = Dimensions.get('window')

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
          scrollEnabled={false}
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeCard style={styles.animeCard} anime={item} navigation={this.props.navigation} />
              </View>
            );
          }}
          data={this.props.data}
          horizontal={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: width * 0.9,
    height: 240
  },
  rect: {
    width: width * 0.4,
    height: width * 0.65,
    marginRight: width * 0.1
  },
  animeCard: {
    top: 0,
    left: 0,
    width: width * 0.4,
    height: width * 0.65,
    position: "absolute"
  }
});
