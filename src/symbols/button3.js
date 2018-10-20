import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class button3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 56,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <TouchableOpacity onPress={this.props.handler} style={[styles.root, this.props.style]}>
        <Icon
          style={styles.icon}
          name={this.props.iconName ? this.props.iconName : "share-variant"}
          type={
            this.props.iconType ? this.props.iconType : "MaterialCommunityIcons"
          }
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F51B5",
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 24
  }
});
