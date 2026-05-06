import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Setting() {
  return (
    <>
      <Stack.Screen
          options={{
            headerTitle: "Setting",
          }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Setting</Text>
      </View>
    </>
  );
}
