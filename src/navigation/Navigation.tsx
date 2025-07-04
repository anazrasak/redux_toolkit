/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import Feeds from '../screens/Feeds';
import { Image, View } from 'react-native';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          color: 'black',
          marginTop:2
        },
        tabBarActiveTintColor: 'black', 
        tabBarInactiveTintColor: '#888', 
      }}
      >
         <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
              <Image source={require('../assets/home.png')} style={{height:27,width:27}}/>
              ) : (
               <Image source={require('../assets/homeInactice.png')} style={{height:27,width:27}}/>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
               <Image source={require('../assets/feed.png')} style={{height:27,width:27}}/>
              ) : (
                  <Image source={require('../assets/feedInactive.png')} style={{height:30,width:30}}/>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                  <Image source={require('../assets/profile.png')} style={{height:30,width:30}}/>
              ) : (
                  <Image source={require('../assets/profileInactive.png')} style={{height:30,width:30}}/>
              )}
            </View>
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

const Navigation = () => {
       return (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Feeds" component={Feeds} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        );
  
};

export default Navigation;
