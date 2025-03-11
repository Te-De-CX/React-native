import { View, Text, StyleSheet, Appearance } from 'react-native'
import { Colors } from '@/constants/Colors'
import React from 'react'

const menu = () => {

    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    
  return (
    <View>
      <Text>menu</Text>
    </View>
  )
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        
    })
}

export default menu