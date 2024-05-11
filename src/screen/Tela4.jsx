import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, StatusBar, Text, View } from 'react-native';

const DATA = [
  {
    title: 'Sabor',
    data: [
      { nome: 'Brigadeiro', valor: 15 },
      { nome: 'Maracujá', valor: 25 },
      { nome: 'Doce de leite', valor: 30 },
    ],
  },
  {
    title: 'Cobertura',
    data: [
      { nome: 'Chantili', valor: 10 },
      { nome: 'Chocolate', valor: 20 },
      { nome: 'Pasta Americana', valor: 35 },
    ],
  },
  {
    title: 'Tamanho',
    data: [
      { nome: '40 fatias', valor: 100 },
      { nome: '50 fatias', valor: 120 },
      { nome: '60 fatias', valor: 140 },
      { nome: '100 fatias', valor: 180 },
    ],
  },
];

const Exemplo8 = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.nome + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.subtitle}>+R${item.valor},00</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default Exemplo8;