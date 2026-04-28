import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'


export default function FlatCardScroll(){
    return(
        <View style={styles.containerMain}>
            <Text style={styles.tituloTexto}>Flat Cards Scroll</Text>
            {/* CONTENEDOR DE SCROLL*/}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {/* CARD 1 */}
                <View style={[styles.card, styles.cardOne]}><Text>Rojo</Text></View>
                {/* CARD 2 */}
                <View style={[styles.card, styles.cardTwo]}><Text>Verde</Text></View>
                {/* CARD 3 */}
                <View style={[styles.card, styles.cardThree]}><Text>Azul</Text></View>
                {/* CARD 1 */}
                <View style={[styles.card, styles.cardOne]}><Text>Rojo</Text></View>
                {/* CARD 2 */}
                <View style={[styles.card, styles.cardTwo]}><Text>Verde</Text></View>
                {/* CARD 3 */}
                <View style={[styles.card, styles.cardThree]}><Text>Azul</Text></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    containerMain: {
        flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 8,
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 8
    },
    cardOne: {
      backgroundColor: '#EF5354'
    },
    cardTwo: {
      backgroundColor: '#50DBB4'
    },
    cardThree: {
      backgroundColor: '#5DA3FA'
    }
})