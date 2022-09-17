import { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CameraPage from './pages/Camera';
import LeaderboardPage from './pages/Leaderboard';
import PersonalPage from './pages/Personal';
import FeedPage from './pages/Feed';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition="bottom"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
                iconName = focused ? 'dynamic-feed' : 'dynamic-feed';
                return <MaterialIcons name={iconName} size={24} color={color} />;
              } else if (route.name === 'Camera') {
                iconName = focused ? 'ios-camera' : 'ios-camera';
                return <Ionicons name={iconName} size={24} color={color} />;
              } else if (route.name === 'Leaderboard') {
                iconName = focused ? 'ios-trophy' : 'ios-trophy';
                return <Ionicons name={iconName} size={24} color={color} />;
              } else if (route.name === 'Personal') {
                iconName = focused ? 'ios-person' : 'ios-person';
                return <Ionicons name={iconName} size={24} color={color} />;
              }
            },
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
          })
        }>
        <Tab.Screen name="Leaderboard" component={LeaderboardPage} />
        <Tab.Screen name="Camera" component={CameraPage} />
        <Tab.Screen name="Feed" component={FeedPage} />
        <Tab.Screen name="Personal" component={PersonalPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#fff',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 60,
    fontSize: 8,

  },
  tabBarLabel: {
    fontSize: 8,
    marginBottom: 5,
    width: 100,
  },
});