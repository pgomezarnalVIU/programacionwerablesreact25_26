import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

export default function FlatCard() {
  return (
    <View style={styles.container}>
        <Text style={styles.tituloTexto}>FlatCard</Text>
        <View style={[styles.card,styles.cardOne]}><Text>Rojo</Text></View>
        <View style={[styles.card,styles.cardTwo]}><Text>Verde</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Azul</Text></View>
        <View style={[styles.card,styles.cardOne]}><Text>Rojo</Text></View> 
    </View>
  )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 8,
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 8
    },
    cardOne: {
      backgroundColor: colors.backgroundColorRed
    },
    cardTwo: {
      backgroundColor: colors.backgroundColorGreen
    },
    cardThree: {
      backgroundColor: colors.backgroundColorBlue
    }
})