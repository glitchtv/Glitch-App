import React, { Component } from "react";
import Icon from "@builderx/icons";
import ListItem from "../symbols/ListItem";
import { View, StyleSheet, FlatList } from "react-native";

export default class Episodes extends Component {
  async getData() {
    let data = this.props.navigation.state.params
    let s = await fetch('https://twist.moe/api/anime/'+data.selectedAnime.twist.slug.slug+'/sources', {
      headers: {
        "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
      }
    })
    // let s = await fetch('https://twist.moe/a/' + data.selectedAnime.twist.slug.slug+'/1').catch(e => console.error(e))
    //let html = await s.text()
    //let result = html.slice(html.indexOf('window.__NUXT__='))
    //result = result.slice(result.indexOf('=') + 1, result.indexOf('</script') - 1)
    //let data = JSON.parse(result)
    console.log(s)
    let d = await s.json()
    console.log(d)
    let episodes = d
    this.setState({episodes: episodes})
  }
  constructor(props) {
    super(props)
    this.state = {
      episodes: []
    }
    this.getData.bind(this)()
  }
  render() {
    return (
      <View style={styles.root}>
        <Icon onPress={() => this.props.navigation.goBack()} style={styles.icon} name="ios-close" type="Ionicons" />
        <FlatList
          style={styles.list2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <ListItem handler={() => {
                  this.props.navigation.navigate('Watch', {...this.props.navigation.state.params, episode: item})
                }} style={styles.listItem} text={"Episode " + item.number} />
              </View>
            );
          }}
          data={this.state.episodes}
          horizontal={false}
        />
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
  list2: {
    position: "absolute",
    width: 360,
    height: "88.05555555555556%",
    top: 86,
    left: 0
  },
  rect2: {
    height: 60,
    alignSelf: "stretch"
  },
  listItem: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  }
});
