import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Tela3({ route }) {
  const { recheioTitulo, recheioValor, cobertura } = route.params;
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <View>
      <Text>Confirmação do Pedido</Text>
      <Text>Recheio selecionado: {recheioTitulo}</Text>
      <Text>Valor do recheio: R$ {recheioValor}</Text>
      <Text>Cobertura selecionada: {cobertura}</Text>
    </View>
  );
}