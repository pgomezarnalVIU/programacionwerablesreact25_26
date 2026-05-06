import { Stack } from 'expo-router';

export default function HomeLayout() {
  return( 
  <Stack>
    <Stack.Screen 
    name="index" 
    options={{ headerTitle: "Lista" }} />
    <Stack.Screen 
    name="edit" 
    options={{ headerTitle: "Editar Elemento" }} />
  </Stack>
  );
}
