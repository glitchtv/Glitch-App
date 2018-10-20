import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
var { width, height } = Dimensions.get('window')

export default class ChosenTag extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 102,
    height: 31
  };
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.handler(this.props.text)} style={[this.props.style]}>
        <View style={styles.rect3} />
        <Text style={styles.text2}>
          {this.props.text ? this.props.text : "Genre"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  rect3: {
    top: 0,
    left: "0%",
    width: width * .3,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1,
    borderWidth: 0,
    borderColor: "rgba(191,10,116,1)",
    borderRadius: 40
  },
  text2: {
    top: 10,
    left: 0,
    width: width * .3,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
