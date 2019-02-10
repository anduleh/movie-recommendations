import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Rep from "./Rep";
import Button from "./Button";

const styles = StyleSheet.create({
  username: {
    padding: 30,
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  spaceBetween: {
    flex: 1,
    justifyContent: "space-between"
  }
});

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.spaceBetween}>
        <View>
          <View style={styles.username}>
            <Text>Username</Text>
          </View>
          <Rep />
          <View>
            <Button name="Dashboard" />
            <Button name="Betting History" />
            <Button name="Settings" />
            <Button name="Free Credits" />
          </View>
        </View>
        <View>
          <Button name="Play Tutorial" />
          <Button name="Logout" />
        </View>
      </View>
    );
  }
}

export default withNavigation(Settings);
