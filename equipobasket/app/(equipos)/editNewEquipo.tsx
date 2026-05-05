import { useState } from 'react';
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles as styles } from "../../styles/globalStyles";
import { useCreateEquipo } from '../../domain/presentation/hook/useCreateEquipo';
import { Equipo } from '@/domain/data/entity/Equipo';

export type EquipoCategoria =
  | 'senior'
  | 'junior'
  | 'cadete'
  | 'infantil'
  | 'alevin'
  | 'benjamin';

const categorias: EquipoCategoria[] = [
  'senior',
  'junior',
  'cadete',
  'infantil',
  'alevin',
  'benjamin',
];
export type EquipoTipo = 'masculino' | 'femenino' | 'mixto';

const tipos: EquipoTipo[] = ['masculino', 'femenino', 'mixto'];

export default function EditNewEquipo() {
  const { createEquipo, isSubmitting, error } = useCreateEquipo();

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState<EquipoCategoria>('senior');
  const [tipo, setTipo] = useState<EquipoTipo>('masculino');

  const handleSubmit = async () => {
     const equipoCreado = await createEquipo(
      {
        id: 0,
        nombre,
        categoria,
        tipo,
      }    );

    if (equipoCreado) {
      alert('Equipo creado con éxito');
    } else {
      alert('Error al crear el equipo');
    }
    router.back();
  };

  return (
      <View style={styles.form}>
        <Text style={styles.titleField}>Crear equipo</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nombre</Text>

          <TextInput
            value={nombre}
            onChangeText={setNombre}
            placeholder="Junior Masculino A"
            style={styles.input}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Categoría</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={categoria}
              onValueChange={(value) => setCategoria(value)}
            >
              {categorias.map((item) => (
                <Picker.Item
                  key={item}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Tipo</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tipo}
              onValueChange={(value) => setTipo(value)}
            >
              {tipos.map((item) => (
                <Picker.Item
                  key={item}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>
          </View>
        </View>

        {error && <Text style={styles.error}>{error}</Text>}

        <Pressable
          style={({ pressed }) => [
            styles.buttonForm,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonTextForm}>
            Crear equipo
          </Text>
        </Pressable>
      </View>
  );
}