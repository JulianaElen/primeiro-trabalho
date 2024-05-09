import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';

export default function Tela6() {

  const nav = useNavigation();
  return (
    <View>
      <Button
      title='Acompanhar Pedido'
      onPress={ () => nav.navigate("TelaInicio")}
      />
    </View>
  )
}