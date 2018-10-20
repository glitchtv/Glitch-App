import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class ListItem extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 60
  };
  render() {
    return (
      <TouchableOpacity onPress={this.props.handler} style={[this.props.style]}>
        <View style={styles.rect2} />
        <Text style={styles.text} selectionColor="rgba(191,10,116,1)">
          {this.props.text ? this.props.text : "No more episodes!"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  rect2: {
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    position: "absolute",
    borderWidth: 0,
    borderColor: "rgba(191,10,116,1)",
    borderTopColor: "rgba(191,10,116,1)",
    borderBottomColor: "rgba(191,10,116,1)",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  text: {
    top: 18,
    left: 23,
    width: "93.61%",
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(170,170,170,1)"
  }
});
