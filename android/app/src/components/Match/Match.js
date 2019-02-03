import React from "react";
import { View, StyleSheet } from "react-native";
import TeamContainer from "./TeamContainer";
import BetContainer from "./BetContainer";

const styles = StyleSheet.create({
  match: {
    flexDirection: "row",
    flex: 0.125
  }
});

class Match extends React.Component {
  static navigationOptions = {
    title: "Matches"
  };

  render() {
    return (
      <View style={styles.match}>
        <TeamContainer />
        <BetContainer />
      </View>
    );
  }
}

export default Match;
