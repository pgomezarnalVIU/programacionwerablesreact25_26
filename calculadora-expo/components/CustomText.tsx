import { Text, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';

//Queremos que nuestro componente pueda heredar todas las propiedades de Text
//Es como una modificacion de Text
//Con variant podemos definir una propiedad para modificar contenido
interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

//Podemos enviar a nuestro CustomText un texto
//Con ..rest podemos enviar todas las propiedades de Text
const CustomText = ({children,variant='h1', ...rest}:Props) => {
  return (
      <Text
        style={[
            {color:'white',fontFamily:'SpaceMono'},
            variant == 'h1' && globalStyles.resultadoPrincipal,
            variant == 'h2' && globalStyles.resultadoSecundario
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}>
        {children}
      </Text>
  )
}

export default CustomText