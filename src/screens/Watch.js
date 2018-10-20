import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, WebView, Dimensions } from "react-native";
var { width, height } = Dimensions.get('window')

export default class Watch extends Component {
    render() {
        let data = this.props.navigation.state.params
        return (
            <View style={styles.root}>
                <Icon onPress={() => this.props.navigation.goBack()} style={styles.icon} name="ios-close" type="Ionicons" />
                <WebView style={{ width: width, height: height - 60, top: 60 }} source={{ uri: 'https://twist.moe/a/' + data.selectedAnime.twist.slug.slug + '/' + data.episode.number }}></WebView>
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
