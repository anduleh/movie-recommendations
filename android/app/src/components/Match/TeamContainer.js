import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import Team from "./Team";

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: "row",
    flex: 0.65
  }
});

class TeamContainer extends React.Component {
  matchDetails = param => {
    this.props.navigation.navigate("MatchDetail", param);
  };

  render() {
    return (
      <TouchableNativeFeedback
         onPress={() => this.matchDetails(this.props.match)}
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
