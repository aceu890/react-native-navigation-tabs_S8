import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false  // Oculta la hamburguesa
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

{/* <Drawer.Navigator 
    screenOptions={{drawerPosition:'right'}}
> */}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>

        {/* Parte del Avatar */}
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'

          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={25} color="grey" />
          <Text style={styles.menuTexto}>Navegación Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'

          }}
          onPress={() => navigation.navigate('SettingScreen')}
        >
          <Icon name="cog-outline" size={25} color="grey" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}