import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
       drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
       headerShown: false  // Oculta la hamburguesa
    }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title:'home'}} component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen"  options={{ title:'Settings'}} component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

{/* <Drawer.Navigator 
    screenOptions={{drawerPosition:'right'}}
> */}