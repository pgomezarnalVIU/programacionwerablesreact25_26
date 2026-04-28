import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Contact from './Contact'

/* */
const datosContacto =[
    {
        id: 1,
        name: 'Paco Gomez',
        status: 'Profesor VIU',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    },
    {
        id: 2,
        name: 'Pakito Gomez',
        status: 'Profesor Mastermind',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    },
    {
        id: 3,
        name: 'Pakuchi Gomez',
        status: 'Youtuber aficionado',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    }
]


export default function ContactList(){
    return(
        <View>
            <Text style={styles.tituloTexto}>Contact List</Text>
            <ScrollView style={styles.container}>
                {
                    datosContacto.map((contacto) => (
                        <Contact
                            key={contacto.id}
                            nameprop={contacto.name}
                            statusprop={contacto.status}
                            imageprop={contacto.imageUrl}
                        />
                    ))
                }
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
    container:{
        paddingHorizontal:16,
        marginBottom:4
    }
})