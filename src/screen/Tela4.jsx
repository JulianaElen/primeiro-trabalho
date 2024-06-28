import {View, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Input, Text, color} from '@rneui/base';
import {blue} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

// Tela de login com opções de entrar
export default function Tela4({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imgSuperiorContainer}>
        <Image
          source={require('../../assents/img/img-superior2.png')}
          style={styles.imgSuperior}
        />
      </View>
      <View style={styles.imgLogoContainer}>
        <Image
          source={require('../../assents/img/logo2.png')}
          style={styles.imgLogo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('TelaInicial')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonInnerContainer}
        />
      </View>
      <View style={styles.containerInfo}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo')}>
          <Text style={styles.textoInfo}>
            Para informações sobre o aplicativo, clique aqui!
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgInferiorContainer}>
        <Image
          source={require('../../assents/img/img-inferior2.png')}
          style={styles.imgInferior}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imgSuperiorContainer: {
    alignItems: 'flex-start',
  },
  imgSuperior: {
    width: 350,
    height: 150,
  },
  imgLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 250,
    height: 350,
    resizeMode: 'contain',
  },
  imgInferiorContainer: {
    alignItems: 'flex-end',
  },
  imgInferior: {
    width: 350,
    height: 180,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255,102,196, 1)',
    borderRadius: 25,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonInnerContainer: {
    height: 50,
    width: 200,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  containerInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  textoInfo: {
    color: '#701198',
    fontSize: 15,
    textDecorationLine: 'underline',
    
  },
});
