import { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Button,Image } from 'react-native';

export default function CompTouch(){
      // Hook contador
      const [contador, setContador] = useState(0);

      // Funcion para incrementar el contador
      const onPress = () => {
        setContador(contador + 1);
        console.log("Contador: ", contador);
      }
       

      return(
        <View style={styles.container}>
            {/* TEXTO QUE MUESTRA EL CONTADOR */}
            <View style={styles.countContainer}>
                <Text style={styles.textoCount}>Las veces que has apretado es: {contador}</Text>
            </View>
            {/* AREA TOUCHABLE */}
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Apretar AQUI</Text>
            </TouchableOpacity>
            {/* AREA TOUCHABLE CON IMAGEN */}
            <TouchableOpacity style={styles.buttonImage} onPress={onPress}>
                <Image
                    style={styles.img}
                    source={require('../assets/cuenta.png')}
                />
            </TouchableOpacity>
            {/* BOTON*/}
            <View style={styles.countContainer}>
                <Button 
                title='Apreta el BOTON'
                onPress={onPress}
                />
            </View>
        </View>
    )
  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    buttonImage: {
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'center',
      marginTop: 5,
      padding: 10,
    },
    img:{
      width: 300,
      height: 150,    
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    textoCount:{
        fontSize: 24,
    },
    buttonContainer: {
      alignItems: 'center',
      padding: 10,
    }
  });