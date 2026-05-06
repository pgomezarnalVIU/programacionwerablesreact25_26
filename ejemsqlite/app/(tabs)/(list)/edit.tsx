import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Item {
  id: number;
  nombre: string;
  numero: number;
}

export default function Edit() {
  const db = useSQLiteContext();
  const params = useLocalSearchParams<{ item?: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (params) {
      console.log('Received params:', params);
    }
    if (params && typeof params === 'string') {
      setItem(JSON.parse(params));
    }
  }, [params]);

  return (
    <View style={styles.container}>
      {item ? (
        <>
          <Text style={styles.textRow}>ID: {item.id}</Text>
          <Text style={styles.textRow}>Nombre: {item.nombre}</Text>
          <Text style={styles.textRow}>Número: {item.numero}</Text>
        </>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },
  textRow :{
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  }
});

