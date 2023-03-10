import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { colores, styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };


export const Pagina1Screen = ({ navigation }: Props) => {

  // MENU DE HAMBURGUESA MANUAL
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 18
          }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name="menu-outline"
            color="black"
            size={35}
          />
        </TouchableOpacity>
      )
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5

      }}>
        Navegar con argumentos
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'pedro'
          })}
        >
          <Icon
            name="man-outline"
            color="white"
            size={35}
          />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon
            name="woman-outline"
            color="white"
            size={35}
          />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
