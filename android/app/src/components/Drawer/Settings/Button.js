import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  padding: {
    padding: 15
  }
});

class Button extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          Alert.alert("You tapped the button!");
        }}
      >
        <View style={styles.padding}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Button;
