import { useEffect, useState, useRef  } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
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
  const { equipo,initEquipo,createEquipo,updateEquipo, isSubmitting, error } = useCreateEquipo();
  //Recepción de datos edicion de equipo desde
  // la pantalla de listado de equipos, si no se reciben datos se asume que es un nuevo equipo
  const equipoSeleccionado = useLocalSearchParams<{ equipo?: string }>();
  const ultimoEquipoProcesado = useRef<string | null>(null);

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState<EquipoCategoria>('senior');
  const [tipo, setTipo] = useState<EquipoTipo>('masculino');

  const handleSubmit = async () => {
     if(equipo===null){
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
     }else{
      const equipoActualizado = await updateEquipo(equipo);
        if (equipoActualizado) {
          alert('Equipo actualizado con éxito');
        } else {
          alert('Error al actualizar el equipo');
        }
     }
    router.back();
  };

  //Inicializamos el equipo si existen datos recibidos desde la pantalla de listado de equipos, esto es para el caso de edicion de equipo, 
  // si no se reciben datos se asume que es un nuevo equipo
useEffect(() => {
  const equipoParam = equipoSeleccionado?.equipo;

  if (!equipoParam) return;

  // Evita procesar dos veces el mismo valor
  if (ultimoEquipoProcesado.current === equipoParam) return;

  ultimoEquipoProcesado.current = equipoParam;
  try {
    const equipo = JSON.parse(equipoParam);
    console.log("Received params:", equipo);
    initEquipo(equipo);
    setNombre(equipo.nombre);
    setCategoria(equipo.categoria);
    setTipo(equipo.tipo);
  } catch (error) {
    console.error("Error parseando equipo:", error);
  }
}, [equipoSeleccionado?.equipo]);

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
            {equipo === null ? "Crear equipo" : "Modificar equipo"}
          </Text>
        </Pressable>
      </View>
  );
}