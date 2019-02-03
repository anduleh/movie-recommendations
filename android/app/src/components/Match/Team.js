import React from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  half: {
    flex: 0.5
  },
  teamImg: {
    width: "100%",
    height: "100%"
  },
  opacity: {
    opacity: 0.4
  },
  teamText: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 17,
    textAlign: "center"
  },
  centerVH: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Team extends React.Component {
  render() {
    return (
      <View style={styles.half}>
        <ImageBackground
          style={styles.teamImg}
          imageStyle={styles.opacity}
          source={{
            uri:
              "https://vignette.wikia.nocookie.net/draco-csgo/images/a/aa/CLG.png/revision/latest?cb=20160312181136"
          }}
        >
          <View style={styles.centerVH}>
            <Text style={styles.teamText}>CLG</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Team;
