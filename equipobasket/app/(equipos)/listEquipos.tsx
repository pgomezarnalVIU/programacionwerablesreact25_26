import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native";
import { useEquipos } from "../../domain/presentation/hook/useEquipos";
import { globalStyles as styles } from "../../styles/globalStyles";

export default function ListEquipos() {
  const { equipos, isLoading, error, reload } = useEquipos();
  
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>Cargando equipos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>

        <Pressable style={styles.button} onPress={reload}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={equipos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay equipos registrados.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cardEquipo}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.detail}>Categoría: {item.categoria}</Text>
            <Text style={styles.detail}>Tipo: {item.tipo}</Text>
          </View>
        )}
      />
    </View>
  );
}
