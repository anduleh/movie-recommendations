import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

class Matches extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        <Text>Matches</Text>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Matches;