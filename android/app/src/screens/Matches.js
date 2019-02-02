import React from 'react';
import { Text, View } from 'react-native';

class MatchesScreen extends React.Component {
    static navigationOptions = {
      title: 'Matches'
    };
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Matches!</Text>
        </View>
      );
    }
  }

export default MatchesScreen;