import React, { Component } from "react";
import Icon from "@builderx/icons";

import ChosenTag from "../symbols/ChosenTag";
import TagRow from "../symbols/TagRow";

import { Center } from "@builderx/utils";
import { View, StyleSheet, FlatList, Text, TextInput } from "react-native";

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
        <Center horizontal>
          <TextInput placeholder="TextInput" style={styles.textInput} />
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>OR, select filters below</Text>
        </Center>
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
    height: 342,
    top: 145,
    left: 19
  },
  rect3: {
    height: 31,
    alignSelf: "stretch",
    marginBottom: 7
  },
  label: {
    top: 124,
    left: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  list2: {
    top: 536,

    width: 319,
    height: 92,
    position: "absolute",
    left: "5.56%"
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
    top: 516,
    left: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  textInput: {
    height: 37,
    width: 257,
    top: 51,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  text2: {
    top: 101,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)"
  }
});
