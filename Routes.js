import React from "react";
import { View, Dimensions } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import Avatar from "./android/app/src/screens/Avatar";
import Matches from "./android/app/src/screens/Matches";
import MatchDetail from "./android/app/src/screens/MatchDetail";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import SettingsButton from "./android/app/src/components/Header/SettingsButton";
import Settings from "./android/app/src/components/Drawer/Settings";
import BetSlip from "./android/app/src/components/Drawer/BetSlip";
import RightHeader from "./android/app/src/components/Header/RightHeader";

const HomeTab = createMaterialTopTabNavigator(
  {
    "jan 30": Matches,
    "jan 31": Matches,
    "feb 1": Matches,
    "feb 2": Matches,
    Today: Matches,
    "feb 4": Matches,
    "feb 5": Matches,
    "feb 6": Matches,
    "feb 7": Matches
  },
  {
    initialRouteName: "Today",
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12
      },
      tabStyle: {
        padding: 0,
        borderWidth: 0,
        width: Dimensions.get("window").width / 6
      },
      labelStyle: {
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "purple"
      },
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

const MatchesStack = createStackNavigator(
  {
    Matches: {
      screen: HomeTab,
      navigationOptions: {
        title: "Matches",
        headerLeft: <SettingsButton />,
        headerRight: <RightHeader />,
      }
    },
    MatchDetail: {
      screen: MatchDetail,
      navigationOptions: {
        title: "Match Details",
        headerRight: <RightHeader />
      }
    }
  },

  {
    transitionConfig: getSlideFromRightTransition,
    initialRouteName: "Matches",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "purple"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AvatarStack = createStackNavigator(
  {
    Avatar: {
      screen: Avatar,
      navigationOptNions: {
        title: "Avatar"
      }
    }
  },
  {
    initialRouteName: "Avatar",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "purple"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <SettingsButton />,
      headerRight: <RightHeader />
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Matches: {
      screen: MatchesStack,
      navigationOptions: {
        tabBarLabel: "Matches",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="sword-cross" type="material-community" />
        )
      }
    },
    Avatar: {
      screen: AvatarStack,
      navigationOptions: {
        tabBarLabel: "Avatar",
        tabBarIcon: ({ tintColor }) => <Icon name="paw" type="font-awesome" />
      }
    }
  },
  {
    //router options
    tabBarOptions: {
      activeTintColor: "purple",
      inactiveTintColor: "gray"
    }
  }
);

const BetSlipDrawer = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    }
  },
  {
    drawerPosition: "right",
    contentComponent: BetSlip,
    getCustomActionCreators: (route, stateKey) => {
      console.log("inner: " + stateKey);
      return {
        toggleBetSlipDrawer: () => DrawerActions.toggleDrawer({ key: stateKey })
      };
    }
  }
);

const SettingsDrawer = createDrawerNavigator(
  {
    BetSlipDrawer: {
      screen: BetSlipDrawer,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    }
  },
  {
    contentComponent: Settings,
    getCustomActionCreators: (route, stateKey) => {
      return {
        toggleSettingsDrawer: () =>
          DrawerActions.toggleDrawer({ key: stateKey })
      };
    }
  }
);

export default createAppContainer(SettingsDrawer);
