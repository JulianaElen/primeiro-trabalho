import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';

export default function Tela3() {

  const nav = useNavigation();

  return (
    <View>
            <Button
      title='Pagamento'
      onPress={ () => nav.navigate("TelaEntregaPagamento")}
      />
    </View>
  )
}