import { View, Text } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import CustomText from '@/components/CustomText';
import BotonCalculadora from '@/components/BotonCalculadora';
import { useCalculadora } from '@/hooks/useCalculadora';

const Calculadora = () => {

  //usamos el Hook
  const{formula,prevNumero, buildNumero, borrado} = useCalculadora();

  return (
    <View style={globalStyles.calculadoraContainer}>
      {/* Los View se utilizan como si fueran div */}
      {/* Operaciones y resultados */}
      <View style={{paddingHorizontal:30, marginBottom: 20}}>
        <CustomText variant='h1'>{formula}</CustomText>
        <CustomText variant='h2'>{prevNumero}</CustomText>
      </View>

      {/* Botones de la calculadora */}
      <View style={globalStyles.fila}>
        <BotonCalculadora
        color={Colors.lightGray}
        label='C'
        blackText
        onPress={borrado}
        />
        <BotonCalculadora
        color={Colors.lightGray}
        label='+/-'
        blackText
        onPress={() => console.log("+/-")}
        />
        <BotonCalculadora
        color={Colors.lightGray}
        label='del'
        blackText
        onPress={() => console.log("del")}
        />
        <BotonCalculadora
        color={Colors.orange}
        label='÷'
        onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.fila}>
        <BotonCalculadora label='9' onPress={() => buildNumero("9")}/>
        <BotonCalculadora label='8' onPress={() => buildNumero("8")}/>
        <BotonCalculadora label='7' onPress={() => buildNumero("7")}/>
        <BotonCalculadora color={Colors.orange} label='x' onPress={() => console.log("x")}
        />
      </View>


      <View style={globalStyles.fila}>
        <BotonCalculadora label='6' onPress={() => buildNumero("6")}/>
        <BotonCalculadora label='5' onPress={() => buildNumero("5")}/>
        <BotonCalculadora label='4' onPress={() => buildNumero("4")}/>
        <BotonCalculadora color={Colors.orange} label='+' onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.fila}>
        <BotonCalculadora label='3' onPress={() => buildNumero("3")}/>
        <BotonCalculadora label='2' onPress={() => buildNumero("2")}/>
        <BotonCalculadora label='1' onPress={() => buildNumero("1")}/>
        <BotonCalculadora color={Colors.orange} label='-' onPress={() => console.log("-")}
        />
      </View>
      <View style={globalStyles.fila}>
        <BotonCalculadora label='0' dobleSize onPress={() => buildNumero("0")}/>
        <BotonCalculadora label='.' onPress={() => buildNumero(".")}/>
        <BotonCalculadora color={Colors.orange} label='=' onPress={() => console.log("=")}
        />
      </View>

    </View>
  )
}

export default Calculadora;