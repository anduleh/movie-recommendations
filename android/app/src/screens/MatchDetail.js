import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Tile, List, ListItem, ScrollView } from "react-native-elements";

class MatchDetail extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>{this.props.navigation.state.params}</Text>
          <Image source={require('../../src/main/assets/img/gnome.jpg')} />
        </View>
    );
  }
}

export default MatchDetail;
