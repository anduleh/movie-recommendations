import React from "react";
import {
  Alert,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  matches: {
    flex: 1
  },
  match: {
    flexDirection: "row",
    flex: 0.125
  },
  matchup: {
    flexDirection: "row",
    flex: 0.65
  },
  bet: {
    flexDirection: "row",
    flex: 0.35
  },
  half: {
    flex: 0.5
  },
  teamImg: {
    width: "100%",
    height: "100%",
    opacity: 0.4
  },
  overlayText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  teamText: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 17
  },
  centerVH: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  betButton: {
    flex: 1,
    backgroundColor: "purple"
  },
  betText: {
    color: "white"
  }
});

class Match extends React.Component {
  static navigationOptions = {
    title: "Matches"
  };

  render() {
    return (
      <View style={styles.matches}>
        <View style={styles.match}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('MatchDetail')}
          >
            <View style={styles.matchup}>
              <View style={styles.half}>
                <ImageBackground
                  style={styles.teamImg}
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/draco-csgo/images/a/aa/CLG.png/revision/latest?cb=20160312181136"
                  }}
                />
                <View style={styles.overlayText}>
                  <Text style={styles.teamText}>CLG</Text>
                </View>
              </View>
              <View style={styles.half}>
                <ImageBackground
                  style={styles.teamImg}
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/fake-esports/images/c/c5/TSM.png/revision/latest?cb=20161029043424"
                  }}
                />
                <View style={styles.overlayText}>
                  <Text style={styles.teamText}>TSM</Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.bet}>
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
            <View style={styles.half}>
              <TouchableNativeFeedback
                onPress={() => {
                  Alert.alert("You tapped the button!");
                }}
              >
                <View style={[styles.centerVH, styles.betButton]}>
                  <Text style={styles.betText}>2.20</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Match);
