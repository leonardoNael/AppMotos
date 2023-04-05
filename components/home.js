import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_500Medium,
  MontserratAlternates_400Regular,
  MontserratAlternates_600SemiBold,
} from '@expo-google-fonts/dev';

export default function Home(props) {
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
      <Text style={styles.txt_titulo}> Tipos de Motos</Text>
      <Image
        source={require('../assets/Kawasaki-Ninja-H2R.png')}
        style={styles.img}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate('Esportivas');
        }}>
        <Text style={styles.txtbtn}>Esportivas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate('Scooters');
        }}>
        <Text style={styles.txtbtn}>Scooter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate('OffRoad');
        }}>
        <Text style={styles.txtbtn}>Offroad</Text>
      </TouchableOpacity>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  img: {
    marginTop: 20,
    borderRadius: 30,
    width: 350,
    height: 260,
    marginLeft:12,
  },

  txt_titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'OpenSans_500Medium',
  },

  btn: {
    backgroundColor: 'black',
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
  
    
  },

  txtbtn: {
    fontSize: 20,
    color: 'white',
    textAlign:'center',
    fontFamily:'MontserratAlternates_400Regular',
  },
});
