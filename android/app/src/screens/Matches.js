import React from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";
import Match from "../components/Match/Match";

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#dad7d7",
    fontSize: 15,
    padding: 5,
    color: "black"
  }
});

class MatchesScreen extends React.Component {
  render() {
    return (
        <SectionList
          sections={[
            {
              title: "January 31, 2019",
              data: ["TSM vs CLG", "C9 vs 100", "FOX vs FLY"]
            },
            {
              title: "February 1, 2019",
              data: ["GGS vs CLG", "OPT vs 100", "CG vs FLY"]
            },
            {
              title: "February 2, 2019",
              data: ["CG vs TSM", "FLY vs FOX", "CLG vs FLY"]
            },
            {
              title: "February 3, 2019",
              data: ["TL vs TSM", "CLG vs FOX", "GGS vs TSM"]
            },
            {
              title: "February 4, 2019",
              data: ["OPT vs TL", "CLG vs C9", "FOX vs GGS"]
            },
            {
              title: "February 6, 2019",
              data: ["GGS vs CLG", "OPT vs 100", "CG vs FLY"]
            },
            {
              title: "February 7, 2019",
              data: ["CG vs TSM", "FLY vs FOX", "CLG vs FLY"]
            },
            {
              title: "February 8, 2019",
              data: ["TL vs TSM", "CLG vs FOX", "GGS vs TSM"]
            },
            {
              title: "February 9, 2019",
              data: ["OPT vs TL", "CLG vs C9", "FOX vs GGS"]
            }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => <Match match={item} />}
          keyExtractor={(item, index) => index}
          stickySectionHeadersEnabled='true'
        />
    );
  }
}

export default MatchesScreen;
