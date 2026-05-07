import { useFocusEffect, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";


export default function Index() {
  const db = useSQLiteContext();
  const [lista, setLista] = useState([]);
  const router=useRouter();

  async function loadData() {
      const allRows = await db.getAllAsync('SELECT * FROM lista');
      for (const row of allRows) {
        console.log(row.id, row.nombre, row.numero);
      }
      setLista(allRows);
  }

  // Cargar datos al montar el componente
  // useEffect se ejecuta después de que el componente se haya renderizado, 
  // lo que es ideal para cargar datos iniciales
  // La dependencia [db] asegura que si la conexión a la base de datos cambia, se recarguen los datos
  useEffect(() => {
    loadData();
  }, [db]);

  // Refrescar datos cada vez que la pantalla se enfoque
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const handleDelete = (id: number, nombre: string) => {
    Alert.alert(
      'Confirmar borrado',
      `¿Deseas borrar "${nombre}"?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Borrar',
          onPress: async () => {
            try {
              await db.runAsync('DELETE FROM lista WHERE id = ?', [id]);
              loadData(); // Recargamos la lista
            } catch (error) {
              console.error('Error al borrar:', error);
              Alert.alert('Error', 'No se pudo borrar el elemento');
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View
      style={styles.container}
    >
      {lista.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <TouchableOpacity style={styles.textContainer} onPress={() => router.push({ 
            pathname: '/edit', 
            params: { 
              id: item.id.toString(),
              nombre: item.nombre,
              numero: item.numero.toString()
            } 
          })}>
            <Text style={styles.textRow}>
              Nombre: {item.nombre} - Número: {item.numero}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleDelete(item.id, item.nombre)}
          >
            <Text style={styles.deleteButtonText}>Borrar</Text>
          </TouchableOpacity>
        </View>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
  },
  textRow :{
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

