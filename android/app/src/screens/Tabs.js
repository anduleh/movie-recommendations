import React from "react";
import { Text, View, StyleSheet, SectionList, Dimensions } from "react-native";
import Matches from "./Matches";
import DummyScreen from "./DummyScreen.js";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

const HomeTab = createMaterialTopTabNavigator({
  'jan 29': Matches,
  'jan 30': Matches,
  'jan 31': Matches,
  'feb 1': Matches,
  'feb 2': Matches,
  'Today': Matches,
  'feb 4': Matches,
  'feb 5': Matches,
  'feb 6': Matches,
  'Feb 7': Matches,
  'Feb 8': Matches
}, {
  initialRouteName: 'Today',
  tabBarOptions: {
    scrollEnabled: true,
    labelStyle: {
      fontSize: 12
    },
    tabStyle: {
     padding: 0,
     borderWidth: 0,
     width: Dimensions.get('window').width / 6,
    },
    labelStyle: {
       fontWeight: "bold",
    },
    style: {
      backgroundColor: 'purple',

    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  },
});


export default createAppContainer(HomeTab);