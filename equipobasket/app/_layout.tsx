import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite';

import { DATABASE_NAME, initializeDatabase } from '@/domain/data/local/connection';

export default function RootLayout() {
  return(
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(equipos)/listEquipos" options={{ title: "Equipos" }} />  
        <Stack.Screen name="(noticias)/listNoticias" options={{ title: "Noticias" }} />
        <Stack.Screen name="(estadisticas)/listEstadisticas" options={{ title: "Estadísticas" }} />
        <Stack.Screen name="(miequipo)/miEquipo" options={{ title: "Mi Equipo" }} />
      </Stack>
    </SQLiteProvider>
  );
}
