import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, StatusBar } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          hidden={true}
        />
        <Center>
          <Image
            source={require("../assets/Glitch-Logo.png")}
            style={styles.image}
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
  image: {
    height: 289,
    width: 289,
    position: "absolute"
  },
  statusBar: {}
});
