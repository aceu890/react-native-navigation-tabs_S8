import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import {LogBox, Text} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
LogBox.ignoreLogs(['sending'])

const Tab = createMaterialTopTabNavigator();

export const  TopTabNavigator = () => {

const { top: paddingTop } = useSafeAreaInsets()


  return (
<Tab.Navigator style={{paddingTop}}
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: colores.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white', 
          shadowColor:'transparent',
          // elevation: 0,

        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          switch (route.name) {
              case 'ChatScreen':
              iconName = 'I'
              break;
 
              case 'ContactsScreen':
              iconName = 'I'
              break;
 
              case 'AlbumsScreen':
              iconName = 'I'
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
      );
    }