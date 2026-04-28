
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCard from './components/FlatCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCardScroll from './components/FlatCardScroll';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView style={{ flex: 1}}>
        <FlatCard/>
        <FlatCardScroll />
        <FancyCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
