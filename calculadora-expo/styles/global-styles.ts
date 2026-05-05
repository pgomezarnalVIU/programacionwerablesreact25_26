import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create(
    {
        background:{
            flex:1,
            backgroundColor: Colors.background
        },
        calculadoraContainer:{
            flex: 1,
            justifyContent: 'flex-end',
            paddingTop: 20,
        },
        resultadoPrincipal:{
            color: Colors.textPrimary,
            fontSize: 70,
            textAlign: 'right',
            fontWeight: '400'
        },
        resultadoSecundario:{
            color: Colors.textSecundary,
            fontSize: 40,
            textAlign: 'right',
            fontWeight: '300'
        },
        fila:{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 18,
            paddingHorizontal: 10,
        },
        boton:{
            height:80,
            width:80,
            backgroundColor:Colors.darkGray,
            borderRadius: 100,
            justifyContent: "center",
            marginHorizontal:10
        },
        textoBoton: {
            textAlign: "center",
            padding: 10,
            fontSize: 30,
            color: Colors.textPrimary,
            fontWeight: "300",
            fontFamily: "SpaceMono"
        }
    }
)