import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Colors} from './config/colors';
// console.disableYellowBox = true;
import home from './pages/home';
import subCategory from './pages/subCategory';
import detailItem from './pages/detailItem';
import shoppingCart from './pages/shoppingCart';
import account from './pages/account';
import favorites from './pages/favorites';
import qrCode from './pages/qrCode';
import signIn from './pages/signIn';
import map from './pages/map';

const activeTintLabelColor = Colors.ICONS;
const inactiveTintLabelColor = Colors.TEXTBOX;
const login = createStackNavigator(
  {
    signIn: {
      screen: signIn,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.TEXT,
      headerStyle: {
        backgroundColor: Colors.CONTAINER,
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },
);
const stack = createStackNavigator(
  {
    home: {
      screen: home,
      navigationOptions: {
        header: null,
      },
    },
    subCategory: {
      screen: subCategory,
      navigationOptions: {
        header: null,
      },
    },
    detailItem: {
      screen: detailItem,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.TEXT,
      headerStyle: {
        backgroundColor: Colors.CONTAINER,
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
  },
);
const favorit = createStackNavigator(
  {
    favorites: {
      screen: favorites,
      navigationOptions: {
        header: null,
      },
    },
    detailItem: {
      screen: detailItem,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.TEXT,
      headerStyle: {
        backgroundColor: Colors.CONTAINER,
        shadowColor: 'transparent',
        elevation: 0,
      },
      // header: {
      //   style: {shadowColor: 'transparent'},
      // },
    },
  },
);
const profile = createStackNavigator(
  {
    account: {
      screen: account,
      navigationOptions: {
        header: null,
      },
    },
    map: {
      screen: map,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.TEXT,
      headerStyle: {
        backgroundColor: Colors.CONTAINER,
        shadowColor: 'transparent',
        elevation: 0,
      },
      // header: {
      //   style: {shadowColor: 'transparent'},
      // },
    },
  },
);
const tab = createMaterialBottomTabNavigator(
  {
    home: {
      screen: stack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon size={25} name="home-variant-outline" color={tintColor} />
        ),
      },
    },
    qrCode: {
      screen: qrCode,
      navigationOptions: {
        tabBarLabel: 'Cardapio',
        tabBarIcon: ({tintColor}) => (
          <Icon size={25} name="qrcode-scan" color={tintColor} />
        ),
      },
    },

    NearBy: {
      screen: favorit,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({tintColor}) => (
          <Icon size={25} name="heart-outline" color={tintColor} />
        ),
      },
    },
    Cart: {
      screen: shoppingCart,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => (
          <Icon size={25} name="shopping-outline" color={tintColor} />
        ),
      },
    },
    Account: {
      screen: profile,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({tintColor}) => (
          <Icon size={25} name="account-outline" color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'home',
    activeColor: activeTintLabelColor,
    inactiveColor: inactiveTintLabelColor,
    barStyle: {
      borderWidth: 0.5,
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      borderColor: 'transparent',
      overflow: 'hidden',
    },
    shifting: true,
  },
);
const AppSwitchNavigator = createSwitchNavigator({
  signIn: {screen: login},
  home: {screen: tab},
});

export default createAppContainer(AppSwitchNavigator);
