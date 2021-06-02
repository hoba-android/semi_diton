import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from '../screens/fn/Home';
import HomeS from '../screens/fn/HomeS';
import HomeW from '../screens/fn/HomeW';
import HomeSports from '../screens/fn/HomeSports';
import HomeMeals from '../screens/fn/HomeMeals';

import Reports from '../screens/fn/Reports';
import UserDetails from '../screens/fn/PackageDetails';
import MyOrders from '../screens/fn/MyOrders';
import Notifications from '../screens/fn/Notifications';

const homeStack = createStackNavigator(
  {
    Home: Home,
    HomeS: HomeS,
    HomeW: HomeW,
    HomeMeals: HomeMeals,
    HomeSports: HomeSports,
    MyOrders: MyOrders,
  },

  {
    headerMode: 'none',
  }
);

const bottomNav = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="home" size={24} color="black" />
      ),
    },
  },
  Profile: {
    screen: UserDetails,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="face" size={24} color="black" />
      ),
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="message-reply" size={24} color="black" />
      ),
    },
  },
  Reports: {
    screen: Reports,
    navigationOptions: {
      tabBarLabel: 'Reports',
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="filetext1" size={24} color="black" />
      ),
    },
  },
});

export default createAppContainer(bottomNav);
