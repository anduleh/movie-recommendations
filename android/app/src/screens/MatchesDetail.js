import React from "react";
import { Text, View } from "react-native";

class MatchesDetail extends React.Component {
  static navigationOptions = {
    title: "MatchesDetail"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>MatchesDetail!</Text>
      </View>
    );
  }
}

export default MatchesDetail;
