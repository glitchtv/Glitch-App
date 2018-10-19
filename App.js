import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";

import Search from "./src/screens/Search";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Splash: {
    screen: Splash
  },
  Home: {
    screen: Home
  },
  Search: {
    screen: Search
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Splash: {
      screen: Splash
    },
    Home: {
      screen: Home
    },
    Search: {
      screen: Search
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
