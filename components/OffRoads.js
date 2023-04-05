import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_500Medium,
  MontserratAlternates_400Regular,
  MontserratAlternates_600SemiBold,
} from '@expo-google-fonts/dev';

export default function OffRoads() {
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
          <Text style={styles.txt_titulo}>OffRoads</Text>
          <Image
            source={require('../assets/moto-trilha.jpg')}
            style={styles.img}
          />
          <Text style={styles.txtconteudo}>
            As motos off-road surgiram como uma resposta à necessidade de um
            veículo de duas rodas capaz de lidar com terrenos acidentados e
            difíceis. A primeira moto off-road foi criada na década de 1960,
            quando os entusiastas de motociclismo começaram a modificar motos de
            rua para uso off-road. À medida que a popularidade do off-road
            cresceu, os fabricantes começaram a produzir motos especialmente
            projetadas para esse propósito, com suspensões elevadas, pneus com
            cravos e outras modificações que permitiam uma melhor tração e
            manobrabilidade em terrenos acidentados. Desde então, as motos
            off-road se tornaram uma categoria importante dentro do mundo das
            motos, com eventos e competições dedicados a elas.
          </Text>

          <Text style={styles.txt_subtitulo}> Veja alguns exemplos:</Text>

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
  },

  txtflat: {
    fontSize: 18,
    fontFamily:'MontserratAlternates_400Regular',
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
    marginBottom:10,
  },
  txtconteudo: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 25,
    fontFamily:'MontserratAlternates_400Regular',
  },
  txt_subtitulo: {
    fontSize: 22,
    marginLeft: 20,
    fontFamily: 'MontserratAlternates_600SemiBold',
  },
  img_array: {
    width: 350,
    borderRadius: 30,
    height: 200,
    marginBottom: 20,
  },

  view_img_array: {},
});
const arraymotos = [
  {
    capa: require('../assets/crf.jpg'),
    sobre:
      'A Honda CRF 230 é uma moto off-road muito popular no mercado brasileiro. Com um motor de 4 tempos e 230cc, ela oferece um bom equilíbrio entre potência e controle para os pilotos que buscam aventuras na terra.',
  },
  {
    capa: require('../assets/300exc.png'),
    sobre:
      'A KTM 300 EXC é uma moto off-road de alta performance projetada para enfrentar terrenos difíceis e desafiantes. Com um motor de 2 tempos de 300cc, ela produz uma potência impressionante e torque elevado, tornando-a uma das motos mais potentes da sua categoria.',
  },
  {
    capa: require('../assets/ttr.png'),
    sobre:
      'A Yamaha TTR 230 é uma moto off-road de média cilindrada projetada para oferecer um desempenho confiável e divertido para pilotos de diferentes níveis de habilidade. Com um motor de 4 tempos e 230cc, a TTR 230 produz uma potência adequada para enfrentar trilhas mais leves e médias.',
  },
];
