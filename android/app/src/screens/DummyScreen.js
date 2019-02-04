import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";

class DummyScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>Dummy Screen</Text>
          <Image source={require('../../src/main/assets/img/gnome.jpg')} />
        </View>
    );
  }
}

export default DummyScreen;
