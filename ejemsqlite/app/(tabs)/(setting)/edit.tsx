import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Edit() {
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
        <Text>Editar Perfil</Text>
      </View>
    </>
  );
}
