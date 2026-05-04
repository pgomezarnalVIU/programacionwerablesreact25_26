import { Button, Text } from '@react-navigation/elements';
import { Stack, useRouter } from 'expo-router';


export default function PerfilLayout() {
  const router=useRouter();
  
  return( 
  <Stack>
    <Stack.Screen 
    name="index" 
    options={{ 
      headerTitle: "Perfil",
      headerRight: () => (
        <Button title="Editar" onPress={() => {
          router.push("/(tabs)/(perfil)/edit");
        }} > 
          <Text>Editar</Text>
        </Button>
      )
    }} />
    <Stack.Screen 
      name="edit" 
      options={{ headerTitle: "Editar Perfil" }} 
    />
  </Stack>
  );
}
