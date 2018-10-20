import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import ChosenTag from "../symbols/ChosenTag";
import Button3 from "../symbols/button3";
import { View, StyleSheet, Text, FlatList, Dimensions, StatusBar, Image, ScrollView } from "react-native";
var { width, height } = Dimensions.get('window')

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))

export default class AnimeInfo extends Component {
  render() {
    let log = logger("Anime Info")
    let data = this.props.navigation.state.params
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true} />
        <Icon onPress={() => this.props.navigation.goBack()} style={styles.icon} name="ios-close" type="Ionicons" />
        <Image source={{uri: data.selectedAnime.image}} style={styles.cover} />
        <Text style={styles.text} numberOfLines={3}>
          {data.selectedAnime.title}
        </Text>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <ChosenTag style={styles.chosenTag} handler={i => {
                  data.search = {
                    genres: data.filters.genres.indexOf(i) > -1 ? [i] : [],
                    status: data.filters.status.indexOf(i) > -1 ? [i] : []
                  }
                  this.props.navigation.navigate('SearchTags', data)
                }} text={item} />
              </View>
            );
          }}
          data={data.selectedAnime.genre}
          horizontal={true}
        />
        <Text style={styles.text2}>{data.selectedAnime.status} - {data.selectedAnime.year}</Text>
        <Text style={styles.text4}>
          {data.selectedAnime.plot}
        </Text>
        <Center horizontal>
          <Button3
            handler={() => {
              this.props.navigation.navigate('Episodes', data)
            }}
            style={styles.button3}
            iconType="MaterialCommunityIcons"
            iconName="format-list-bulleted"
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
  icon: {
    top: 12,
    left: 22.5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  cover: {
    height: height * 0.4,
    top: 64,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    left: 0,
    right: 0
  },
  text: {
    top: height * .5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(238,238,238,1)",
    fontSize: 28,
    height: 90,
    width: 318,
    lineHeight: 32,
    letterSpacing: 0,
    left: "5.83%"
  },
  list: {
    position: "absolute",
    width: "93.61111111111111%",
    height: 45,
    top: height * .65,
    left: 22
  },
  rect: {
    width: width * .33,
    height: 45,
    marginRight: 5
  },
  chosenTag: {
    top: 0,
    left: 0,
    width: width * .33,
    height: 45,
    position: "absolute"
  },
  text2: {
    top: height * .71,
    left: 21,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)",
    fontSize: 18,
    width: width * 0.95,
    height: 24
  },
  text3: {
  },
  text4: {
    top: height * .75,
    left: 21,
    position: "absolute",
    backgroundColor: "transparent",
    width: width * .93,
    height: height * .3,
    color: "rgba(221,221,221,1)",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0
  },
  button3: {
    bottom: 20,
    position: "absolute",
    height: 56,
    width: 56,
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1
  }
});
