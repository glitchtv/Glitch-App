import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ChosenTag extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 102,
    height: 31
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect3} />
        <Text style={styles.text2}>Genre</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect3: {
    top: 0,
    left: "0%",
    width: 102,
    height: 31,
    position: "absolute",
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(191,10,116,1)",
    borderRadius: 40
  },
  text2: {
    top: 9,
    left: 0,
    width: 102,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
