import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_500Medium,
  MontserratAlternates_400Regular,
  MontserratAlternates_600SemiBold,
} from '@expo-google-fonts/dev';

export default function Scooters() {
  let [fontsloaded] = useFonts({
    OpenSans_500Medium,
    MontserratAlternates_400Regular,
    MontserratAlternates_600SemiBold,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.txt_titulo}>Esportivas</Text>
      <Image
        source={require('../assets/moto-esportiva.jpeg')}
        style={styles.img}
      />
      <Text style={styles.txtconteudo}>
        A moto esportiva não foi projetada para qualquer tipo de piloto. Esse
        modelo de veículo não é próprio para iniciantes do motociclismo, pois
        uma máquina dessas pode ser bem difícil de ser manejada por alguém
        inexperiente.
         Essas motos são, principalmente, para os amantes de
        esporte e/ou da velocidade em duas rodas, que buscam ação, e não
        economizam quando o assunto é adrenalina. Com motores de altíssimas
        cilindradas, possuem melhor desempenho quanto à aceleração, frenagem e
        capacidade de encarar tranquilamente curvas em alta velocidade, por
        exemplo. A modernização dos modelos trouxe melhorias mecânicas e de
        design, e, atualmente, é possível encontrar diversos tipos de motos
        esportivas disponíveis no mercado, atendendo aos mais diversos gostos.
      </Text>
    <Text style={styles.txt_subtitulo}> Alguns exemplos: </Text>
    <FlatList
          data={arraymotos}
          renderItem={({ item }) => (
            <View style={styles.container_flat}>
              <View style={styles.view_img_array}>
                <Image style={styles.img_array} source={item.capa} />
              </View>
              <Text>
                <Text style={styles.sobre}> Sobre a moto:  </Text>
                <Text style={styles.txtflat}>{item.sobre} </Text>
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  container_flat: {
    margin: 25,
    fontSize: 20,
  },
  sobre:{
    fontSize:18,
    fontWeight: 'bold',
    fontFamily:'MontserratAlternates_600SemiBold',
  },

  txtflat: {
    fontSize: 18,
    fontFamily: 'MontserratAlternates_400Regular',
  },
  img: {
    marginLeft: 6,
    marginBottom: 20,
    borderRadius: 30,
    width: 370,
    height: 260,
  },

  txt_titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:'OpenSans_500Medium',
  },
  txtconteudo: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 25,
    fontFamily: 'MontserratAlternates_400Regular'
  },
  txt_subtitulo:{
    fontSize: 22,
    marginLeft: 20,
    fontFamily:'MontserratAlternates_600SemiBold',
  },
  img_array: {
    width: 350,
    borderRadius: 30,
    height: 200,
    marginBottom:20,
  },

 
});


const arraymotos = [
  {
    capa: require('../assets/ninja-zx6.jpg'),
    sobre:
      'A Kawasaki Ninja ZX6 é uma moto esportiva de alta performance projetada para oferecer um desempenho emocionante e uma pilotagem precisa. Com um motor de quatro cilindros e 636cc, a Ninja ZX6 produz cerca de 129 cavalos de potência, proporcionando uma aceleração rápida e um desempenho excepcional em altas velocidades.',
  },
  {
    capa: require('../assets/r3.jpg'),
    sobre:
      'A Yamaha YZF-R3 é uma moto esportiva de média cilindrada projetada para oferecer um desempenho emocionante e uma pilotagem precisa. Com um motor de dois cilindros e 321cc, a R3 produz cerca de 42 cavalos de potência, proporcionando uma aceleração rápida e um desempenho ágil nas curvas.',
  },
  {
    capa: require('../assets/s1000.png'),
    sobre:
      'A BMW S1000 é uma motocicleta esportiva de alta performance fabricada pela BMW Motorrad. Ela possui um motor de quatro cilindros em linha com potência de até 205 cavalos de potência, chassi de alumínio, suspensão avançada e sistema de freio de alto desempenho. A S1000 está disponível em várias variantes, incluindo a versão S1000RR, que é a mais potente, e a versão S1000XR, que é projetada para viagens de longa distância. É uma escolha popular para aqueles que procuram uma experiência emocionante de pilotagem.',
  },
];
