import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default class AnimeCard extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 146,
    height: 242
  };
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AnimeInfo', {...this.props.navigation.state.params, selectedAnime: this.props.anime})} style={[this.props.style]}>
        <Image source={{uri: this.props.anime.image}} style={styles.animeCover} />
        <Text style={styles.animeTitle} selectable={false} numberOfLines={2}>
          {this.props.anime.title ? (
            this.props.anime.title
          ) : (
            "\n          Coming Soon\n        "
          )}
        </Text>
        <Text style={styles.genre} selectable={false} numberOfLines={2}>
          {this.props.anime.genre ? (
            this.props.anime.genre.join(', ')
          ) : (
            "\n          Ecchi, Fantasy\n        "
          )}
        </Text>
      </TouchableOpacity>
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
