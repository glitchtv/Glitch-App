import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import ChosenTag from "../symbols/ChosenTag";
import Button3 from "../symbols/button3";
import { View, StyleSheet, Text, FlatList } from "react-native";

export default class AnimeInfo extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon style={styles.icon} name="ios-close" type="Ionicons" />
        <View style={styles.cover} />
        <Text style={styles.text} numberOfLines={3}>
          Fate/Grand Order: A Mystical Dive into Foreign Season 3
        </Text>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <ChosenTag style={styles.chosenTag} text2 />
              </View>
            );
          }}
          horizontal={true}
        />
        <Text style={styles.text2}>Status - Year</Text>
        <Text style={styles.text3}>
          Because you don't build any native code when using Expo to create a
          project, it's not possible to include custom native modules beyond the
          React Native APIs and components that are available in the Expo client
          app. If you know that you'll eventually need to include your own
          native code, Expo is still a good way to get started. In that case
          you'll just need to "eject" eventually to create your own native
          builds. If you do ej...
        </Text>
        <Center horizontal>
          <Button3
            style={styles.button3}
            iconType="MaterialCommunityIcons"
            iconName="format-list-bulleted"
          />
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
    left: 22.5,
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
    top: 279,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(238,238,238,1)",
    fontSize: 28,
    height: 92,
    width: 318,
    lineHeight: 32,
    letterSpacing: 0,
    left: "5.83%"
  },
  list: {
    position: "absolute",
    width: "93.61111111111111%",
    height: 32,
    top: 384,
    left: 22
  },
  rect: {
    width: 102,
    height: 32,
    marginRight: 5
  },
  chosenTag: {
    top: 0,
    left: 0,
    width: 102,
    height: 32,
    position: "absolute"
  },
  text2: {
    top: 428,
    left: 21,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)",
    fontSize: 18,
    width: 318,
    height: 19
  },
  text3: {
    top: 459,
    left: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(221,221,221,1)",
    fontSize: 16,
    width: 309,
    height: 150.41,
    lineHeight: 18,
    letterSpacing: 0
  },
  button3: {
    top: 653,
    position: "absolute",
    height: 56,
    width: 56,
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1
  }
});
