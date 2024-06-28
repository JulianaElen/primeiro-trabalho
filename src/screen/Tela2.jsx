import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Alert } from 'react-native';
import { Button } from '@rneui/themed';

// Tela de compras que tem as informações sobre os bolos

// json com as informações sobre os bolos
const DATA = [
  {
    title: 'Recheio',
    data: [
      { title: 'Chocolate', price: 20.00 },
      { title: 'Morango', price: 22.50 },
      { title: 'Baunilha', price: 24.00 },
    ],
  },
  {
    title: 'Cobertura',
    data: [
      { title: 'Ganache', price: 23.00 },
      { title: 'Chantilly', price: 22.50 },
      { title: 'Merengue', price: 23.50 },
    ],
  },
  {
    title: 'Decoração',
    data: [
      { title: 'Chocolate', price: 13.00 },
      { title: 'Frutas', price: 12.50 },
      { title: 'Chantilly', price: 13.50 },
    ],
  },
  {
    title: 'Formato',
    data: [
      { title: 'Quadrado', price: 0.00 },
      { title: 'Redondo', price: 12.50 },
      { title: 'Coração', price: 23.50 },
    ],
  },
  {
    title: 'Tamanho',
    data: [
      { title: '40 fatias', price: 103.00 },
      { title: '60 fatias', price: 122.50 },
      { title: '80 fatias', price: 153.50 },
    ],
  },
];

export default function Tela2({ navigation }) {

  const [recheioSelecionado, setRecheioSelecionado] = useState(null);
  const [coberturaSelecionada, setCoberturaSelecionada] = useState(null);
  const [decoracaoSelecionada, setDecoracaoSelecionada] = useState(null);
  const [formatoSelecionado, setFormatoSelecionado] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  
  //chamada quando o botao de finalizar é selecionado, para verificar se não falta nenhuma informação
  const botaoFinalizar = () => {
    if (recheioSelecionado === null) {
      Alert.alert('Erro', 'Por favor, selecione um recheio.');
      return;
    } else if(coberturaSelecionada === null){
      Alert.alert('Erro', 'Por favor, selecione uma cobertura.');
      return;
    } else if(decoracaoSelecionada === null){
      Alert.alert('Erro', 'Por favor, selecione uma decoração.');
      return;
    } else if(formatoSelecionado === null){
      Alert.alert('Erro', 'Por favor, selecione um formato.');
      return;
    } else if(tamanhoSelecionado === null){
      Alert.alert('Erro', 'Por favor, selecione um tamanho.');
      return;
    } 
      //Se não falta informação, segue para a tela3
    navigation.navigate('TelaConfirmacao', {
      recheioTitulo: DATA[0].data[recheioSelecionado].title,
      recheioPreco: DATA[0].data[recheioSelecionado].price,
      coberturaTitulo: DATA[1].data[coberturaSelecionada].title,
      coberturaPreco: DATA[1].data[coberturaSelecionada].price,
      decoracaoTitulo: DATA[2].data[decoracaoSelecionada].title,
      decoracaoPreco: DATA[2].data[decoracaoSelecionada].price,
      formatoTitulo: DATA[3].data[formatoSelecionado].title,
      formatoPreco: DATA[3].data[formatoSelecionado].price,
      tamanhoTitulo: DATA[4].data[tamanhoSelecionado].title,
      tamanhoPreco: DATA[4].data[tamanhoSelecionado].price,
    });
  };

  return (

    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item, index, section }) => (
          <View
            style={[
              styles.item,
              (section.title === 'Recheio' && recheioSelecionado === index) ||
              (section.title === 'Cobertura' && coberturaSelecionada === index) ||
              (section.title === 'Decoração' && decoracaoSelecionada === index) ||
              (section.title === 'Formato' && formatoSelecionado === index) ||
              (section.title === 'Tamanho' && tamanhoSelecionado === index)
                ? styles.itemSelecionado: null,
            ]}
          >
            <Text
              style={styles.title}
              onPress={() => {
                if (section.title === 'Recheio') {
                  setRecheioSelecionado(index);
                } else if (section.title === 'Cobertura') {
                  setCoberturaSelecionada(index);
                }else if (section.title === 'Decoração') {
                  setDecoracaoSelecionada(index);
                }else if (section.title === 'Formato') {
                  setFormatoSelecionado(index);
                }else if (section.title === 'Tamanho') {
                  setTamanhoSelecionado(index);
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
        onPress={botaoFinalizar}
        buttonStyle={styles.button}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#f0f0f0',
    padding: 10,
    fontWeight: 'bold',
  },
  item: {
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    padding: 20,
    borderStyle: 'solid',
    backgroundColor: '#D2C4D8',
    borderRadius: 50,
  },
  itemSelecionado: {
    backgroundColor: '#BEA0C0',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(255,102,196, 1)',
    borderRadius: 25,
  }, 
});
