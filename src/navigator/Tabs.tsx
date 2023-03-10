import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />

}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch(route.name) {
            case 'Tab1Screen' :
              iconName = 'home-outline'
              break;
  
            case 'Tab2Screen' :
              iconName = 'basketball-outline'
              break;
  
            case 'StackNavigator' :
              iconName = 'bookmarks-outline'
              break;
          }
          return <Icon name={ iconName } size={25} color={ color } />;

      }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions={({route}) => ({
      tabBarActiveTintColor: colores.primary,
      tabBarStyle: {
        borderTopColor: colores.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({color, focused}) => {
        let iconName: string = '';
        switch(route.name) {
          case 'Tab1Screen' :
            iconName = 'T1'
            break;

          case 'Tab2Screen' :
            iconName = 'T2'
            break;

          case 'StackNavigator' :
            iconName = 'ST'
            break;
        }
        return <Text style={{color}}>{ iconName }</Text>
    }
    })}
  >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'tab2'}} component={TopTabNavigator} />
      {/* <Tab.Screen name="Tab3Screen" component={Tab3Screen} /> */}
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}