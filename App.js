import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const imagen1=require('./assets/imagen1.jpeg');
const imagen2=require('./assets/imagen1.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio feriado</Text>
      <Text style={styles.datos}> 
        Raúl Alejandro García García {"\n"}
        C12515150 {"\n"}
        Certificado en Desarrollo y Diseño Web
      </Text>
      <Text style={styles.hobbies}>Me gusta el diseño, la música y ver conciertos en vivo!</Text>
      <Text style={styles.comentario}>"El certificado es un buen punto de partida, ahora tengo bases para especializarme en cualquiera de las áreas que vimos en clase con una idea de qué esperar."</Text>
      <Image source={imagen1} style={styles.imagen}></Image>
      <Image source={imagen2} style={styles.imagen}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d19cbd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: "Impact",
    fontSize: 60,
    color: "beige",
    margin: 20,
    letterSpacing: 1,
    textAlign: "center",
  },

  datos: {
    backgroundColor: 'beige',
    fontSize: 26,
    color: 'rgb(138, 76, 117)',
    textAlign: "center",
    marginVertical: 10,
    borderRadius: 15,
    padding: '5%',
  },

  hobbies: {
    fontFamily: "Impact",
    fontSize: 45,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: "center",
    padding: '5%',
    color: 'rgb(138, 76, 117)',
  },

  comentario: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: "center",
    paddingHorizontal: '10%',
  },

  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 20,
  }

});
