import React from "react";
import { Text } from "react-native";
import { withNavigation } from "react-navigation";

class Settings extends React.Component {
  render() {
    return (
      <Text>Settings</Text>
    );
  }
}

export default withNavigation(Settings);
