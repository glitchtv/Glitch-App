import React, { Component } from "react";
import Icon from "@builderx/icons";

import TagRow from "../symbols/TagRow";

import { Center } from "@builderx/utils";
import Button31 from "../symbols/button31";
import { View, StyleSheet, FlatList, Text, TextInput } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon name="ios-close" style={styles.icon} type="Ionicons" />
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
        <Text style={styles.label2}>Status</Text>
        <Center horizontal>
          <TextInput
            placeholder="Type to search..."
            style={styles.searchbar}
            selectionColor="rgba(191,10,116,1)"
            placeholderTextColor="rgba(102,102,102,1)"
          />
        </Center>
        <Center horizontal>
          <Text style={styles.helpText}>OR, select filters below</Text>
        </Center>
        <Center horizontal>
          <Button31
            style={styles.searchButton}
            iconType="FontAwesome"
            iconName="search"
          />
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
    top: 535,

    width: 319,
    height: 75.27,
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
  label2: {
    top: 516,
    left: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
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
  helpText: {
    top: 101,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)"
  },
  searchButton: {
    position: "absolute",
    height: 56,
    width: 56,
    bottom: 23.13,
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1
  }
});
