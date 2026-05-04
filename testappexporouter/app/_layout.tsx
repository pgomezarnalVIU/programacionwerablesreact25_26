import { Stack } from 'expo-router';

export default function TabsLayout() {
  return( 
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen 
    name="(tabs)" 
    options={{ headerTitle: "Home" }} />
    <Stack.Screen name="explorar" options={{ headerTitle: "Explorar" }} />
  </Stack>
  );
}
