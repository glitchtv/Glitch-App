import React, { Component } from "react";
import Tag from "./Tag";
import { View, FlatList, StyleSheet } from "react-native";

export default class TagRow extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 321,
    height: 31
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <Tag style={styles.tag} text />
              </View>
            );
          }}
          horizontal={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: 321,
    height: 31
  },
  rect2: {
    width: 102,
    height: 31,
    marginRight: 7
  },
  tag: {
    top: 0,
    left: 0,
    width: 102,
    height: 31,
    position: "absolute"
  }
});
