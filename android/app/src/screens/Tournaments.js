import React from 'react';
import { Text, View } from 'react-native';

class Tournaments extends React.Component {
    static navigationOptions = {
      title: 'Tournaments'
    };
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Tournaments!</Text>
        </View>
      );
    }
  }

export default Tournaments;