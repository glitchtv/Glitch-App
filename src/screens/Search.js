import React, { Component } from "react";
import Icon from "@builderx/icons";

import TagRow from "../symbols/TagRow";

import { Center } from "@builderx/utils";
import Button31 from "../symbols/button31";
import { View, StyleSheet, FlatList, Text, TextInput, Dimensions, StatusBar } from "react-native";
var { width, height } = Dimensions.get('window')

var logger = (tag) => ((t) => console.log(`[${tag}] ${t}`))
let chunks = (arr, n) => arr.reduce((all, one, i) => {
  const ch = Math.floor(i / n)
  all[ch] = [].concat((all[ch] || []), one)
  return all
}, []);

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      status: []
    }
  }
  render() {
    let log = logger("Search")
    let data = this.props.navigation.state.params
    return (
      <View scrollEnabled style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true}/>
        <Icon onPress={() => this.props.navigation.goBack()} name="ios-close" style={styles.icon} type="Ionicons" />
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect3}>
                <TagRow style={styles.tagRow} handler={i => {
                  log("Chose " + i)
                  if (data.filters.genres.indexOf(i) > -1) {
                    let g = this.state.genres
                    if (g.indexOf(i) > -1) g = g.filter(_ => _ != i)
                    else g.push(i)
                    this.setState({
                      genres: g
                    })
                  } else if (data.filters.status.indexOf(i) > -1) {
                    let s = this.state.status
                    if (s.indexOf(i) > -1) s = s.filter(_ => _ != i)
                    else s.push(i)
                    this.setState({
                      status: s
                    })
                  }
                }} checker={_ => this.state.genres.indexOf(_) > -1 || this.state.status.indexOf(_) > -1} data={item} />
              </View>
            );
          }}
          data={chunks(data.filters.genres.concat(data.filters.status), 3)}
          horizontal={false}
        />
        <Text style={styles.label}>Genres</Text>
        <Center horizontal>
          <TextInput
            placeholder="Type to search..."
            style={styles.searchbar}
            selectionColor="rgba(191,10,116,1)"
            placeholderTextColor="rgba(102,102,102,1)"
          />
        </Center>
        <Center horizontal>
          <Text style={styles.helpText}>OR, select filters below</Text>
        </Center>
        <Center horizontal>
          <Button31
            handler={() => {
              data.search = {
                genres: this.state.genres,
                status: this.state.status
              }
              this.props.navigation.navigate('SearchTags', data)
            }}
            style={styles.searchButton}
            iconType="FontAwesome"
            iconName="check"
          />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    flex: 1
  },

  icon: {
    top: 12,
    left: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },

  tagRow: {
    position: "absolute",
    top: 0,
    left: "0%",
    height: 45,
    width: width
  },
  list: {
    position: "absolute",
    width: width,
    height: height * 0.7,
    top: 150,
    left: 19
  },
  rect3: {
    height: 45,
    alignSelf: "stretch",
    marginBottom: 7
  },
  label: {
    top: 124,
    left: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  list2: {
    top: height * (700/822),
    width: width,
    height: 100,
    position: "absolute",
    left: "5.56%"
  },
  rect4: {
    height: 45,
    alignSelf: "stretch",
    marginBottom: 7
  },
  tagRow2: {
    top: 0,
    left: "0%",
    width: width,
    height: 45,
    position: "absolute"
  },
  label2: {
    top: height * (675/822),
    left: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(170,170,170,1)"
  },
  searchbar: {
    height: 37,
    width: 257,
    top: 51,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    borderBottomColor: "rgba(255,255,255,1)",
    borderBottomWidth: 1
  },
  helpText: {
    top: 101,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)"
  },
  searchButton: {
    position: "absolute",
    height: 56,
    width: 56,
    bottom: 20,
    backgroundColor: "rgba(191,10,116,1)",
    opacity: 1
  }
});
