import React from "react";
import { View, StyleSheet } from "react-native";
import Bet from "./Bet";

const styles = StyleSheet.create({
  betContainer: {
    flexDirection: "row",
    flex: 0.35,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white"
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
