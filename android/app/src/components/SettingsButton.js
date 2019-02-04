import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class SettingsButton extends React.Component {
  render() {
    return (
        <View style={{ paddingLeft: 16 }}>
        <Icon
          color="white"
          name="bars"
          type="font-awesome"
          onPress={() => this.props.navigation.toggleSettingsDrawer()}
        />
      </View>
    );
  }
}

export default withNavigation(SettingsButton);
