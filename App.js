import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

class Matches extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        <Text>Matches</Text>
      </View>
        );
    }
}

class Tournaments extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        <Text>Tournaments</Text>
      </View>
        );
    }
}

class Avatar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        <Text>Avatar</Text>
      </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Matches,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (<Icon name="sword-cross" type="material-community" />)
            }
        },
        Tournaments: {
            screen: Tournaments,
            navigationOptions: {
                tabBarLabel: 'Tournaments',
                tabBarIcon: ({ tintColor }) => (<Icon name="tournament" type="material-community" />)
            }
        },
        Avatar: {
            screen: Avatar,
            navigationOptions: {
                tabBarLabel: 'Avatar',
                tabBarIcon: ({ tintColor }) => (<Icon name="paw" type="font-awesome" />)
            }
        },
    }, {
        //router options
        tabBarOptions: {
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
        },

    }

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default createAppContainer(TabNavigator);