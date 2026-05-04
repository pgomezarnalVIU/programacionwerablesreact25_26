import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Perfil() {
  return (
    <>
      <Stack.Screen
          options={{
            headerTitle: "Perfil",
          }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Perfil</Text>
      </View>
    </>
  );
}
