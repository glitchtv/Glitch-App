import React, { Component } from "react";
import Tag from "./Tag";
import ChosenTag from './ChosenTag';
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
var { width, height } = Dimensions.get('window')

export default class TagRow extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 321,
    height: 31
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <FlatList
          style={styles.list}
          scrollEnabled={false}
          renderItem={({ item, separators }) => {
            if (this.props.checker(item))
              return (
                <View style={styles.rect2}>
                  <ChosenTag style={styles.tag} text={item} handler={this.props.handler} />
                </View>
              )
            else return (
                <View style={styles.rect2}>
                  <Tag style={styles.tag} text={item} handler={this.props.handler} />
                </View>
              )
          }}
          data={this.props.data || []}
          horizontal={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: width,
    height: 45
  },
  rect2: {
    width: width * .3,
    height: 60,
    marginRight: 7
  },
  tag: {
    top: 0,
    left: 0,
    width: width * .3,
    height: 45,
    position: "absolute"
  }
});
