
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FichaJugadorScreen from './screen/FichaJugador';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FichaJugadorScreen></FichaJugadorScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  }
});
