import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';

export default function Tela4() {


  const nav = useNavigation();
  return (


    
    <View>
            <Button
      title='Confirmar'
      onPress={ () => nav.navigate("TelaResumoPedido")}
      />
    </View>
  )
}