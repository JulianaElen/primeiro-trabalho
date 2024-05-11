import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';

export default function Tela3({ navigation }) {
  return (
    <View>
      <Text>Tela de carrinho. Com lista de coisas que a pessoa escolheu para comprar e preco total.</Text>
      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('TelaConfirmacao')}
      />
    </View>
  )
}