import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_500Medium,
  MontserratAlternates_400Regular,
  MontserratAlternates_600SemiBold
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
          <Text style={styles.txt_titulo}>Scooters</Text>
          <Image
            source={require('../assets/moto-scooter.jpg')}
            style={styles.img}
          />
          <Text style={styles.txtconteudo}>
            Em 1947, a scooter foi inventada com o objetivo de ser um veículo
            econômico, acessível, para as massas, fácil de pilotar e capaz de
            proteger piloto e passageiro das emissões de gases poluentes. Era
            uma alternativa, tanto para homens quanto para mulheres, ao carro,
            no período pós-guerra, na Europa. Mais do que um meio de locomoção,
            surgia um novo estilo de vida, combinando conforto e agilidade com
            um charme e nostalgia urbano, que conquistaria todos os países nas
            décadas seguintes.
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
                  <Text style={styles.sobre}> Sobre a moto: </Text>
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
  sobre: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_600SemiBold'

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
    fontFamily: 'OpenSans_500Medium',
  },
  txtconteudo: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 20,
    fontFamily: 'MontserratAlternates_400Regular',
  },
  txt_subtitulo: {
    fontSize: 22,
    marginLeft: 20,
    fontFamily: 'MontserratAlternates_600SemiBold'
  },

  img_array: {
    width: 350,
    borderRadius: 30,
    height: 200,
    marginBottom: 20,
  },
});

const arraymotos = [
  {
    capa: require('../assets/pcx.jpeg'),
    sobre:
      'A Honda PCX é uma scooter que foi lançada em 2010. Ela é conhecida por sua economia de combustível, facilidade de condução e design moderno. A PCX é produzida em diversas cilindradas, incluindo a PCX 125cc e a PCX 150cc. A PCX possui um motor de quatro tempos, monocilíndrico, com injeção eletrônica de combustível e sistema de arrefecimento líquido. Ela oferece um bom desempenho, sendo capaz de atingir velocidades de até 100 km/h. Além disso, a PCX tem um tanque de combustível de 8 litros, o que garante uma boa autonomia de viagem.',
  },
  {
    capa: require('../assets/elite.png'),
    sobre:
      'A Honda Elite 125 é uma scooter de 125cc produzida pela Honda desde 2010. Ela é conhecida por seu design moderno e elegante, além de seu desempenho confiável e eficiente. A Elite 125 apresenta um motor monocilíndrico, quatro tempos, com injeção eletrônica de combustível e sistema de arrefecimento líquido, capaz de produzir cerca de 9,4 cavalos de potência. Ela é equipada com uma transmissão automática tipo CVT, o que torna a condução mais fácil e suave.',
  },
  {
    capa: require('../assets/nex.png'),
    sobre:
      'A Yamaha Nex é uma motocicleta de 115cc produzida pela Yamaha na Indonésia desde 2005. Ela é uma motocicleta popular no mercado asiático, sendo conhecida por sua economia de combustível e facilidade de uso. A Yamaha Nex apresenta um motor monocilíndrico, quatro tempos, com injeção eletrônica de combustível e sistema de arrefecimento a ar, capaz de produzir cerca de 8 cavalos de potência. Ela é equipada com uma transmissão automática tipo CVT, o que torna a condução mais fácil e suave.',
  },
];
