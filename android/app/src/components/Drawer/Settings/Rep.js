import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 30
  },
  half: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  }
});

class Rep extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.half}>
          <Text>Available</Text>
          <Text>2000</Text>
        </View>
        <View style={styles.half}>
          <Text>Total Rep</Text>
          <Text>2000</Text>
        </View>
      </View>
    );
  }
}

export default Rep;
