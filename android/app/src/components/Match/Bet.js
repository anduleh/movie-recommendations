import React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  half: {
    flex: 0.5
  },
  centerVH: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  betButton: {
    flex: 1,
    backgroundColor: "#dad7d7",
    borderColor: "white",
    borderWidth: 1,
    borderColor: "white"
  },
  betText: {
    color: "white"
  }
});

class Bet extends React.Component {
  render() {
    return (
      <View style={styles.half}>
        <TouchableNativeFeedback
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
        >
          <View style={[styles.centerVH, styles.betButton]}>
            <Text style={styles.betText}>1.60</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default Bet;
