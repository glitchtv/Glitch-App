import React, { Component } from "react";
import { Center } from "@builderx/utils";
import AnimeCard from "../symbols/AnimeCard";

import { View, StyleSheet, Image, FlatList, Text } from "react-native";

export default class Home extends Component {
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
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeCard style={styles.animeCard} animeTitle="" genre="" />
              </View>
            );
          }}
          horizontal={true}
        />
        <Text style={styles.label}>Recently Watched</Text>
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <AnimeCard style={styles.animeCard2} animeTitle="" genre="" />
              </View>
            );
          }}
          horizontal={true}
        />
        <Text style={styles.label2}>Watch Next</Text>
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
  list: {
    position: "absolute",
    height: 243,
    top: 107,
    left: 0,
    right: 0
  },
  rect: {
    width: 146,
    height: 243,
    marginLeft: 20
  },
  animeCard: {
    top: 0,
    left: 0,
    width: 146,
    height: 243,
    position: "absolute"
  },
  label: {
    top: 84,
    left: 28,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  list2: {
    top: 397,
    left: 0,
    right: 0,
    height: 243,
    position: "absolute"
  },
  rect2: {
    width: 146,
    height: 243,
    marginLeft: 20
  },
  animeCard2: {
    top: 0,
    left: 0,
    width: 146,
    height: 243,
    position: "absolute"
  },
  label2: {
    top: 374,
    left: 28,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  }
});
