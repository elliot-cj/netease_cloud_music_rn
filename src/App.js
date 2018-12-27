import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Discover from './discover';
import My from './my';
import Account from './account'
import Friends from './friends'
import Player from './player'

const Tab = TabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: ({ navigation }) => {
      tabBarLabel: "发现音乐",
      tabBarIcon: ({ focused, tintColor }) => {
        <Icon name="ios-disc-outline" size={ 30 } color={ tintColor } />
      }
    }
  },
  My: {
    screen: My,
    navigationOptions: ({ navigation }) => {
      tabBarLabel: "我的音乐",
      tabBarIcon: ({ focused, tintColor }) => {
        <Icon name="ios-musical-notes-outline" size={ 30 } color={ tintColor } />
      }
    }
  }
})


