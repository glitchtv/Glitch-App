import React, { Component } from "react";
import { Center } from "@builderx/utils";
import AnimeCard from "../symbols/AnimeCard";
import { View, StyleSheet, Image } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header} />
        <Center horizontal>
          <Image
            source={require("../assets/Glitch-Logo.png")}
            style={styles.image}
          />
        </Center>
        <AnimeCard style={styles.animeCard} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#111",
    flex: 1
  },
  header: {
    height: 60,
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  image: {
    height: 60,
    width: 60,
    position: "absolute",
    top: "0%"
  },
  animeCard: {
    position: "absolute",
    top: 108,
    left: 20,
    height: 243,
    width: 146
  }
});
