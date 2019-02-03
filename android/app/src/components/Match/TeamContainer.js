import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import Team from "./Team";

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: "row",
    flex: 0.65
  }
});

class TeamContainer extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate("MatchDetail")}
      >
        <View style={styles.teamContainer}>
          <Team />
          <Team />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default withNavigation(TeamContainer);
