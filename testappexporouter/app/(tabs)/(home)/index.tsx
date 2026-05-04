import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href={"/explorar"} style={{ fontSize: 20, marginTop: 20 }}>
        Ir a Explorar
      </Link>
    </View>
  );
}
