import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BetSlipButton from "./BetSlipButton";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1
  },
  half: {
    flex: 0.1
  }
});

class RightHeader extends React.Component {
  render() {
    return <BetSlipButton />;
  }
}

export default RightHeader;
