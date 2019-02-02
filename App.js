import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Avatar from './android/app/src/screens/Avatar';
import Matches from './android/app/src/screens/Matches';
import Tournaments from './android/app/src/screens/Tournaments';

const MatchesStack = createStackNavigator(
  {
    Matches: Matches
  },
  {
    initialRouteName: 'Matches',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const TournamentsStack = createStackNavigator(
  {
    Tournaments: Tournaments
  },
  {
    initialRouteName: 'Tournaments',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AvatarStack = createStackNavigator(
  {
    Avatar: Avatar
  },
  {
    initialRouteName: 'Avatar',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const TabNavigator = createBottomTabNavigator({
  Matches: {
    screen: MatchesStack,
    navigationOptions: {
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => (<Icon name="sword-cross" type="material-community" />)
    }
  },
  Tournaments: {
    screen: TournamentsStack,
    navigationOptions: {
      tabBarLabel: 'Tournaments',
      tabBarIcon: ({ tintColor }) => (<Icon name="tournament" type="material-community" />)
    }
  },
  Avatar: {
    screen: AvatarStack,
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

