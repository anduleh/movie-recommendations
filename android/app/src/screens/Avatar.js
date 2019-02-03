import React from "react";
import { Text, View } from "react-native";

class Avatar extends React.Component {
  static navigationOptions = {
    title: "Avatar"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Avatar!</Text>
      </View>
    );
  }
}

export default Avatar;
