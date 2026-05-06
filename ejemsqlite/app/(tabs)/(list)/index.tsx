import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function Index() {
  const db = useSQLiteContext();
  const [lista, setLista] = useState([]);
  const router=useRouter();

  useEffect(() => {
    async function loadData() {
      const allRows = await db.getAllAsync('SELECT * FROM lista');
      for (const row of allRows) {
        console.log(row.id, row.nombre, row.numero);
      }
      setLista(allRows);
    }

    loadData();
  }, [db]);

  return (
    <View
      style={styles.container}
    >
      {lista.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => router.push({ 
          pathname: '/edit', 
          params: { 
            id: item.id.toString(),
            nombre: item.nombre,
            numero: item.numero.toString()
          } 
        })}>
          <Text style={styles.textRow} key={item.id}>
            Nombre: {item.nombre} - Número: {item.numero}
          </Text>
        </TouchableOpacity>
      ))}
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

