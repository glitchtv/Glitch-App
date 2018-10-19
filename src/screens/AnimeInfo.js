import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text } from "react-native";

export default class AnimeInfo extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon style={styles.icon} name="ios-close" type="Ionicons" />
        <View style={styles.cover} />
        <Center horizontal>
          <Text style={styles.text} numberOfLines={3}>
            Fate/Grand Order: A Mystical Dive into Foreign Season 3
          </Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
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
  cover: {
    height: 201,
    top: 64,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    left: 0,
    right: 0
  },
  text: {
    top: 277,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    height: 92,
    width: 318,
    lineHeight: 32,
    letterSpacing: 0
  }
});
