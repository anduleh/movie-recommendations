import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  bet: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 15
  },
  pick: {
    color: "#f2cc33"
  },
  live: {
    backgroundColor: "red",
    borderRadius: 3,
    color: "white"
  },
  odds: {
    justifyContent: "space-around"
  },
  oddsText: {
    backgroundColor: "#7fce51",
    padding: 3,
    borderRadius: 3
  },
  center: {
    textAlign: "center"
  }
});

class Bet extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          Alert.alert("You tapped the button!");
        }}
      >
        <View style={styles.bet}>
          <View>
            <Text style={styles.center}>Feb 28</Text>
            <Text style={styles.center}>15:00</Text>
            <Text style={[styles.center, styles.live]}>Live</Text>
          </View>
          <View>
            <Text>{this.props.matchup}</Text>
            <Text style={styles.pick}>Pick: Win 1</Text>
            <Text>League: LCS</Text>
          </View>
          <View style={styles.odds}>
            <Text style={styles.oddsText}>133/100</Text>
            <TouchableNativeFeedback
              onPress={() => {
                Alert.alert("You tapped the button!");
              }}
            >
              <View>
                <Icon name="times-circle" type="font-awesome" />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default withNavigation(Bet);
