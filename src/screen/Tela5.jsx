import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// Tela de explicação do projeto
export default function Tela5() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o projeto</Text>
      <Text style={styles.texto}> O projeto consiste em um APP simples para encomendar bolos para festas, utilizando opções pré preparadas. Ele permite realizar novos pedidos e visualizar seus pedidos antigos.</Text>
      <Text style={styles.titulo}>Sobre o Banco de Dados</Text>
      <Text style={styles.texto}> Foi utilizado o mesmo Banco de Dados mostrado nas aulas, no Vercel. Foi criada uma nova tabela chamada "pedidosdm". Essa tabela armazena todos os dados dos pedidos realizados, incluindo as informações da data do pedido.</Text>
      <Text style={styles.titulo}>Sobre API e seus endpoints</Text>
      <Text style={styles.texto}> Para fazer o App utilizei apenas os métodos get e post.</Text>
      <Text style={styles.subtitulo}>Get</Text>
      <Text style={styles.texto}>O endpoint é "/pedidosdm", que foi utilizada para pegar os dados da tabela de pedidos no Banco de Dados.</Text>
      <Text style={styles.subtitulo}>Post</Text>
      <Text style={styles.texto}>O endpoint é "/pedidosdm", que foi utilizado para inserir novos pedidos na tabela.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },  
  texto: {
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 22,
  },
});
