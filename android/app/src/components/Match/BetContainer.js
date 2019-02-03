import React from "react";
import { View, StyleSheet } from "react-native";
import Bet from "./Bet";

const styles = StyleSheet.create({
  betContainer: {
    flexDirection: "row",
    flex: 0.35
  }
});

class BetContainer extends React.Component {
  render() {
    return (
      <View style={styles.betContainer}>
        <Bet />
        <Bet />
      </View>
    );
  }
}

export default BetContainer;
