import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function FichaJugadorScreen() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [numero, setNumero] = useState("");
  const [posicion, setPosicion] = useState("");

  const posiciones = ["Base", "Alero", "Pívot", "Escolta"];

  return (
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Ficha del jugador</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Luka Dončić"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.label}>Edad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 25"
            value={edad}
            onChangeText={setEdad}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Número de jugador</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 77"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Posición</Text>

          {posiciones.map((item) => (
              <BouncyCheckbox
                key={item}
                text={item}
                isChecked={posicion === item}
                onPress={(isChecked) => {
                  setPosicion(isChecked ? item : "");
                }}
                size={24}
                fillColor="#333333"
                unFillColor="#ffffff"
                iconStyle={styles.bouncyIcon}
                innerIconStyle={styles.bouncyInnerIcon}
                textStyle={styles.bouncyText}
                style={styles.bouncyCheckbox}
              />
          ))}
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Resumen</Text>

          <Text style={styles.summaryText}>
            Nombre completo: {nombre || "Sin introducir"}
          </Text>

          <Text style={styles.summaryText}>
            Edad: {edad || "Sin introducir"}
          </Text>

          <Text style={styles.summaryText}>
            Número de jugador: {numero || "Sin introducir"}
          </Text>

          <Text style={styles.summaryText}>
            Posición: {posicion || "Sin seleccionar"}
          </Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  check: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxText: {
    fontSize: 16,
  },
  summary: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
  },bouncyCheckbox: {
  marginTop: 12,
},

  bouncyIcon: {
    borderRadius: 4,
  },

  bouncyInnerIcon: {
    borderWidth: 2,
    borderRadius: 4,
  },

  bouncyText: {
    fontSize: 16,
    color: "#000000",
    textDecorationLine: "none",
  },
});