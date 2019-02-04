import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    marginLeft: 16
  }
});

class SettingsButton extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.toggleSettingsDrawer()}
      >
        <View style={styles.button}>
          <Icon color="white" name="bars" type="font-awesome" />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default withNavigation(SettingsButton);
