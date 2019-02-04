import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    marginRight: 16
  }
});

class BetSlipButton extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.toggleBetSlipDrawer()}
      >
        <View style={styles.button}>
          <Icon name='shoppingcart' type="antdesign" color="white" />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default withNavigation(BetSlipButton);
