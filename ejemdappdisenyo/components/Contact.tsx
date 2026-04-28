import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ContactProps {
    nameprop: string,
    statusprop: string,
    imageprop: string
}

export default function Contact({nameprop, statusprop, imageprop}: ContactProps){
    return(
        <View style={styles.userCard}>
            <Image
                source={{
                uri: imageprop
                }}
                style={styles.userImage}
            />
            <View>
                <Text style={styles.userName}>{nameprop}</Text>
                <Text style={styles.userStatus}>{statusprop}</Text>
            </View>
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
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})