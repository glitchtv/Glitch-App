import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class AnimeCard extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 146,
    height: 242
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.animeCover} />
        <Text style={styles.animeTitle} selectable={false} numberOfLines={2}>
          {this.props.animeTitle ? (
            this.props.animeTitle
          ) : (
            "\n          Kimi no Uwa\n        "
          )}
        </Text>
        <Text style={styles.genre} selectable={false} numberOfLines={2}>
          {this.props.genre ? (
            this.props.genre
          ) : (
            "\n          Ecchi, Fantasy\n        "
          )}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  animeCover: {
    top: 0,
    left: 0,
    height: 191,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    right: 0
  },
  animeTitle: {
    top: 198,
    left: 0,
    height: 22,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    width: "100%"
  },
  genre: {
    top: 220,
    left: "0%",
    width: "100%",
    height: 22,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    textAlign: "center",
    color: "rgba(136,136,136,1)"
  }
});
