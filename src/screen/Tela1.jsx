import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

export default function Tela1({ navigation }) {

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
        style={styles.imgLogo} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar"
          onPress={() => navigation.navigate('TelaCompras')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonInnerContainer}
        />
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
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  imgSuperiorContainer: {
    flex: 1,
    alignItems: 'left',
    marginTop: 0,
    marginBottom: 0,
  },
  imgSuperior: {
    width: 450,
    height: 200,
  },
  imgLogoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 250,
    height: 350,
    resizeMode: 'contain',
  },
  imgInferiorContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 0,
    marginTop: 0,
  },
  imgInferior: {
    width: 350,
    height: 180,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  },
});