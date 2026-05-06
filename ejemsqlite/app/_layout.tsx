import { Stack } from 'expo-router';
import { DATABASE_NAME, initializeDatabase } from '../utils/connection';
import { SQLiteProvider } from 'expo-sqlite';

export default function TabsLayout() {
  return( 
  <SQLiteProvider databaseName={DATABASE_NAME} onInit={initializeDatabase}>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen 
      name="(tabs)" 
      options={{ headerTitle: "Home" }} />
    </Stack>
  </SQLiteProvider>
  );
}