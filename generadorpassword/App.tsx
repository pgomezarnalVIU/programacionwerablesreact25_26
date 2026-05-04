import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/GlobalStyles';
import PasswordGeneratorComponent from './components/PasswordGenerator';
import PasswordGeneratorComponentMod from './components/PasswordGeneratorMod';

export default function App() {

  return (
      <SafeAreaView style={styles.appContainer}>
        <PasswordGeneratorComponentMod />
      </SafeAreaView>
  );
}
