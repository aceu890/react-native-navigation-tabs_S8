import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

useEffect(() => {
    console.log('Tab1Screen effect');
    
}, [])

  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={60} color="black" />;
          <Icon name="attach-outline" size={60} color="black" />;
          <Icon name="bonfire-outline" size={60} color="black" />;
          <Icon name="calculator-outline" size={60} color="black" />;
          <Icon name="chatbubble-outline" size={60} color="black" />;
          <Icon name="images-outline" size={60} color="black" />;
          <Icon name="leaf-outline" size={60} color="black" />;
        </Text>
        

    </View>
  )
}
