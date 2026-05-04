import { useRouter } from "expo-router";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { globalStyles as styles } from "../styles/globalStyles";

type MenuItem = {
  id: number;
  title: string;
  image: any;
  url: string;
};

//Array de objetos para representar los elementos del menú, 
// cada uno con su título, imagen y URL de navegación
const menuItems: MenuItem[] = [
    {
      id: 0,
      title: "Equipos",
      image: require("../assets/images/equipos_logo.png"),
      url: "/(equipos)/listEquipos",
    },
    {
      id: 1,
      title: "Noticias",
      image: require("../assets/images/noticias_logo.png"),
      url: "/(noticias)/listNoticias",
    },
    {
      id: 2,
      title: "Estadísticas",
      image: require("../assets/images/estadisticas_logo.png"),
      url: "/(estadisticas)/listEstadisticas",
    },
    {
      id: 3,
      title: "Mi equipo",
      image: require("../assets/images/mi_equipo_logo.png"),
      url: "/(miequipo)/miEquipo",
    },
];

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {menuItems.map((item) => (
            <Pressable
              key={item.id}
              style={styles.card}
              onPress={() => {router.push(item.url)}}
            >
              <ImageBackground
              source={item.image}
              style={styles.image}
              imageStyle={styles.imageBorder}
              >
                <View style={styles.overlay}>
                  <Text style={styles.cardText}>{item.title}</Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))}
      </View>
    </ScrollView>
  );
}
