import React, { Component } from "react";
import { Center } from "@builderx/utils";
import AnimeCard from "../symbols/AnimeCard";

import Button3 from "../symbols/button3";
import Icon from "@builderx/icons";
import { View, StyleSheet, Image, FlatList, Text, StatusBar } from "react-native";

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default class Home extends Component {
  render() {
    let log = logger("Home")
    let data = this.props.navigation.state.params
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true}/>
        <View style={styles.rect3} />
        <View style={styles.header} />
        <Center horizontal>
          <Image
            source={require("../assets/Glitch-Logo.png")}
            style={styles.image}
          />
        </Center>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <AnimeCard style={styles.animeCard} image={item.image} animeTitle={item.title} genre={item.genre.join(', ')} />
              </View>
            );
          }}
          data={[]}
          horizontal={true}
        />
        <Text style={styles.label}>Recently Watched</Text>
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <AnimeCard style={styles.animeCard2} image={item.image} animeTitle={item.title} genre={item.genre.join(', ')} />
              </View>
            );
          }}
          data={shuffle(data.animes).slice(0, 10)}
          horizontal={true}
        />
        <Text style={styles.label2}>Watch Next</Text>
        <Center horizontal>
          <Button3
            handler={() => {
              log("Clicked Search (through button).")
              this.props.navigation.navigate('Search', data)
            }}
            style={styles.search}
            iconType="FontAwesome"
            iconName="search"
          />
        </Center>
        <Icon
          name="refresh"
          style={styles.icon}
          type="MaterialCommunityIcons"
        />
        <Icon style={styles.icon2} name="ios-search" type="Ionicons" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#111",
    flex: 1
  },
  header: {
    height: 60,
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  image: {
    height: 60,
    width: 60,
    position: "absolute",
    top: "0%"
  },
  list: {
    position: "absolute",
    height: 243,
    top: 115,
    left: 0,
    right: 0
  },
  rect: {
    width: 146,
    height: 243,
    marginLeft: 20
  },
  animeCard: {
    top: 0,
    left: 0,
    width: 146,
    height: 243,
    position: "absolute"
  },
  label: {
    top: 84,
    left: 28,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  list2: {
    top: 412,
    left: 0,
    right: 0,
    height: 243,
    position: "absolute"
  },
  rect2: {
    width: 146,
    height: 243,
    marginLeft: 20
  },
  animeCard2: {
    top: 0,
    left: 0,
    width: 146,
    height: 243,
    position: "absolute"
  },
  label2: {
    top: 374,
    left: 28,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  rect3: {
    top: 60,
    left: 0,
    right: 0,
    height: "91.81%",
    position: "absolute",
    backgroundColor: "rgba(34,34,34,1)",
    opacity: 1
  },
  search: {
    bottom: 30,
    position: "absolute",
    height: 69,
    width: 69,
    borderRadius: 100,
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1
  },
  icon: {
    top: 9,
    left: 18,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    top: 11,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    left: "89.72%"
  }
});
