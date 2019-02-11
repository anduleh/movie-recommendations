import React from "react";
import { View, Text, SectionList, FlatList, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Bet from "./Bet";

const styles = StyleSheet.create({
  title: {
    padding: 10
  },
  spaceAround: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

class BetSlip extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text>Bet Slip</Text>
        </View>
        <View style={styles.spaceAround}>
          <Text>Start</Text>
          <Text>Events</Text>
          <Text>Odds</Text>
        </View>
        <FlatList
          data={[
            { key: "TSM vs OPT" },
            { key: "GGS vs TL" },
            { key: "C9 vs FOX" },
            { key: "100 vs FLY" },
            { key: "CG vs CLG" },
            { key: "FOX vs 100" },
            { key: "CLG vs GGS" },
            { key: "TL vs TSM" },
            { key: "FLY vs CG" }
          ]}
          renderItem={({ item }) => <Bet matchup={item.key} />}
        />
      </View>
    );
  }
}

export default withNavigation(BetSlip);
