import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Explorar() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Pantalla explorar",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Text>Estoy en la segunda ventana</Text>
    </View>
  </>
  );
}
