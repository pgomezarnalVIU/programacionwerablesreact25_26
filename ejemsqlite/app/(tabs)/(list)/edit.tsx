import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";

type Item = {
  id: string;
  nombre: string;
  numero: string;
}

export default function Edit() {
  const db = useSQLiteContext();
  const {id,nombre,numero} = useLocalSearchParams<Item>();
  const [item, setItem] = useState<Item | null>(null);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (id && nombre && numero) {
      setItem({
        id,
        nombre,
        numero,
      });
    }
  }, [id, nombre, numero]);

  const modificarNumeroAleatorio = async () => {
    if (!item) return;

    const nuevoNumero = Math.floor(Math.random() * 100); // 0 a 99

    try {
      setGuardando(true);

      await db.runAsync(
        "UPDATE lista SET numero = ? WHERE id = ?",
        nuevoNumero,
        Number(item.id)
      );

      setItem({
        ...item,
        numero: String(nuevoNumero),
      });

      Alert.alert("Guardado", `Nuevo número: ${nuevoNumero}`);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo guardar el número en la base de datos");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <View style={styles.container}>
      {item ? (
        <>
          <Text style={styles.textRow}>ID: {item.id}</Text>
          <Text style={styles.textRow}>Nombre: {item.nombre}</Text>
          <Text style={styles.textRow}>Número: {item.numero}</Text>
          <Pressable
            style={[
              styles.button,
              guardando && styles.buttonDisabled,
            ]}
            onPress={modificarNumeroAleatorio}
            disabled={guardando}
          >
            <Text style={styles.buttonText}>
              {guardando ? "Guardando..." : "Número aleatorio"}
            </Text>
          </Pressable>
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
    alignItems: "flex-start",
    padding: 20,
  },
  textRow: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  }
});

