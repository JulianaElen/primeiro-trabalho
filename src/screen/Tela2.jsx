import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Button, Alert } from 'react-native';

const DATA = [
  {
    title: 'Recheio',
    data: [
      { title: 'Chocolate', price: 5.00 },
      { title: 'Morango', price: 4.50 },
      { title: 'Baunilha', price: 4.00 },
    ],
  },
  {
    title: 'Cobertura',
    data: [
      { title: 'Chocolate', price: 3.00 },
      { title: 'Morango', price: 2.50 },
      { title: 'Creme de leite', price: 3.50 },
    ],
  },
  {
    title: 'Decoração',
    data: [
      { title: 'Chocolate', price: 3.00 },
      { title: 'Morango', price: 2.50 },
      { title: 'Creme de leite', price: 3.50 },
    ],
  },
  {
    title: 'Formato',
    data: [
      { title: 'Chocolate', price: 3.00 },
      { title: 'Morango', price: 2.50 },
      { title: 'Creme de leite', price: 3.50 },
    ],
  },
  {
    title: 'Tamanho',
    data: [
      { title: 'Chocolate', price: 3.00 },
      { title: 'Morango', price: 2.50 },
      { title: 'Creme de leite', price: 3.50 },
    ],
  },
];

export default function Tela2({ navigation }) {
  const [selectedRecheioIndex, setSelectedRecheioIndex] = useState(null);
  const [selectedCoberturaIndex, setSelectedCoberturaIndex] = useState(null);

  const handleFinalizar = () => {
    if (selectedRecheioIndex === null || selectedCoberturaIndex === null) {
      Alert.alert('Erro', 'Por favor, selecione um recheio e uma cobertura.');
      return;
    }

    navigation.navigate('TelaConfirmacao', {
      recheioTitulo: DATA[0].data[selectedRecheioIndex].title,
      recheioValor: DATA[0].data[selectedRecheioIndex].price,
      cobertura: DATA[1].data[selectedCoberturaIndex].title,
    });
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item, index, section }) => (
          <View style={styles.item}>
            <Text
              style={section.title === 'Recheio' && selectedRecheioIndex === index ||
                     section.title === 'Cobertura' && selectedCoberturaIndex === index ? styles.selected : styles.title}
              onPress={() => {
                if (section.title === 'Recheio') {
                  setSelectedRecheioIndex(index);
                } else if (section.title === 'Cobertura') {
                  setSelectedCoberturaIndex(index);
                }
              }}
            >
              {item.title} - R$ {item.price.toFixed(2)}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <Button
        title="Finalizar"
        onPress={handleFinalizar}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#f0f0f0',
    padding: 10,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
  },
  selected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
});
