import React from "react";
import { Text, View, ScrollView, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { Button, List, ListItem } from "react-native-elements";
import Match from "../components/Match";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    SectionHeader:{
      backgroundColor : '#dad7d7',
      fontSize : 15,
      padding: 5,
      color: 'black',
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  }
});

class MatchesScreen extends React.Component {

// matchDetails = (param) => {
//     this.props.navigation.navigate('MatchDetail',param)
// };

render() {
    return (
    //   <View style={styles.container}>
    //   <SectionList
    //    sections={[
    //      { title: 'January 31, 2019', data: ['TSM vs CLG', 'C9 vs 100', 'FOX vs FLY'] },
    //      { title: 'February 1, 2019', data: ['GGS vs CLG', 'OPT vs 100', 'CG vs FLY'] },
    //      { title: 'February 2, 2019', data: ['CG vs TSM', 'FLY vs FOX', 'CLG vs FLY'] },
    //      { title: 'February 3, 2019', data: ['TL vs TSM', 'CLG vs FOX', 'GGS vs TSM'] },
    //      { title: 'February 4, 2019', data: ['OPT vs TL', 'CLG vs C9', 'FOX vs GGS'] },
    //      { title: 'February 6, 2019', data: ['GGS vs CLG', 'OPT vs 100', 'CG vs FLY'] },
    //      { title: 'February 7, 2019', data: ['CG vs TSM', 'FLY vs FOX', 'CLG vs FLY'] },
    //      { title: 'February 8, 2019', data: ['TL vs TSM', 'CLG vs FOX', 'GGS vs TSM'] },
    //      { title: 'February 9, 2019', data: ['OPT vs TL', 'CLG vs C9', 'FOX vs GGS'] }
    //    ]}
    //    renderSectionHeader={ ({section}) => <Text style={styles.SectionHeader}> { section.title } </Text> }
    //    renderItem={ ({item}) => <TouchableOpacity style={styles.SectionListItemS} onPress={() => this.matchDetails(item)} ><Text> { item }</Text></TouchableOpacity> }
    //    keyExtractor={ (item, index) => index }
    //  />
    //   </View>
    <Match></Match>
    );
  }
}

export default MatchesScreen;
