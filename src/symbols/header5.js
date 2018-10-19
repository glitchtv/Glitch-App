import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header5 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 96,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.header}>
          <View style={styles.leftWrapper}>
            <TouchableOpacity style={styles.leftIconButton}>
              <Icon
                style={styles.leftIcon}
                name="ios-arrow-back"
                type="Ionicons"
              />
              <Text style={styles.leftText}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightWrapper}>
            <TouchableOpacity style={styles.TouchableOpacity}>
              <Text style={styles.rightText}>Action</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            Large Title
          </Text>
        </View>
        <View style={styles.rect} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  header: {
    width: "100%",
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17,
    color: "#007AFF"
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  TouchableOpacity: {},
  rightText: {
    alignSelf: "center",
    fontSize: 17,
    color: "#007AFF"
  },
  textWrapper: {
    height: 52,
    justifyContent: "center",
    paddingLeft: 5
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 40,
    color: "#000"
  },
  rect: {
    height: 715.92,
    width: 357.52,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  }
});
