import {  Pressable,Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors';

interface Props{
    label: string,
    color?: string,
    blackText?: boolean,
    dobleSize?: boolean
    onPress: () => void
}

const BotonCalculadora = ({label,
    color=Colors.darkGray,blackText=false,dobleSize=false,onPress}: Props) => {
  return (
    <Pressable 
        style={({pressed})=>({
            ...globalStyles.boton,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: dobleSize ? 180 : 80
        })}
        onPress={ onPress }
    >
        {/* Puedo usar propiedad pressed para definir un style*/}
        {/* ...globalStyles.textoBoton expandimos todas las propiedades de globalStyles */}
        {/* después podemos sobreescribir propiedades que pongamos a continuación */}
        <Text style={{
            ...globalStyles.textoBoton,
            color: blackText? 'black':'white'
            }}>{label}</Text>
    </Pressable>
  )
}

export default BotonCalculadora