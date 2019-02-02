import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Avatar from './android/app/src/views/Avatar';
import Matches from './android/app/src/views/Matches';
import Tournaments from './android/app/src/views/Tournaments';

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

export default createAppContainer(TabNavigator);