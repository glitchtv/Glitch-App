import React, { Component } from "react";
import Icon from "@builderx/icons";
import ListItem from "../symbols/ListItem";
import { View, StyleSheet, FlatList } from "react-native";

export default class Episodes extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon style={styles.icon} name="ios-close" type="Ionicons" />
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <ListItem style={styles.listItem} text />
              </View>
            );
          }}
          horizontal={false}
        />
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
  list2: {
    position: "absolute",
    width: 360,
    height: "88.05555555555556%",
    top: 86,
    left: 0
  },
  rect2: {
    height: 60,
    alignSelf: "stretch"
  },
  listItem: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  }
});
