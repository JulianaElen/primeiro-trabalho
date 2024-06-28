import {View, Text, ActivityIndicator, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

//tela com resumo do pedido, que também salva no bd
export default function Tela3({route}) {
  const {
    recheioTitulo,
    recheioPreco,
    coberturaTitulo,
    coberturaPreco,
    decoracaoTitulo,
    decoracaoPreco,
    formatoTitulo,
    formatoPreco,
    tamanhoTitulo,
    tamanhoPreco,
  } = route.params;

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const confirmarPedido = async () => {
    setLoading(true);

    const pedido = {
      data_pedido: new Date().toISOString().split('T')[0],
      hora_pedido: new Date().toTimeString().split(' ')[0],
      recheio: recheioTitulo,
      cobertura: coberturaTitulo,
      decoracao: decoracaoTitulo,
      formato: formatoTitulo,
      tamanho: tamanhoTitulo,
      total:
        recheioPreco +
        coberturaPreco +
        decoracaoPreco +
        formatoPreco +
        tamanhoPreco,
    };

    try {
      const response = await fetch(
        'https://backendmobile-j6vq.vercel.app/pedidosdm/',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(pedido),
        },
      );

      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'Pedido Confirmado',
          'Seu pedido foi confirmado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('TelaInicial'),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao confirmar o pedido. Tente novamente.',
          [
            {
              text: 'OK',
              onPress: () => setLoading(false),
            },
          ],
          {cancelable: false},
        );
      }
    } catch (error) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao confirmar o pedido. Tente novamente.',
        [
          {
            text: 'OK',
            onPress: () => setLoading(false),
          },
        ],
        {cancelable: false},
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.header}>Resumo do Pedido</Text>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Recheio</Text>
          <View style={styles.containerResumo}>
            <Text style={styles.textResumo}>{recheioTitulo}</Text>
            <Text style={styles.precoResumo}>R$ {recheioPreco.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Cobertura</Text>
          <View style={styles.containerResumo}>
            <Text style={styles.textResumo}>{coberturaTitulo}</Text>
            <Text style={styles.precoResumo}>
              R$ {coberturaPreco.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Decoração</Text>
          <View style={styles.containerResumo}>
            <Text style={styles.textResumo}>{decoracaoTitulo}</Text>
            <Text style={styles.precoResumo}>
              R$ {decoracaoPreco.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Formato</Text>
          <View style={styles.containerResumo}>
            <Text style={styles.textResumo}>{formatoTitulo}</Text>
            <Text style={styles.precoResumo}>R$ {formatoPreco.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Tamanho</Text>
          <View style={styles.containerResumo}>
            <Text style={styles.textResumo}>{tamanhoTitulo}</Text>
            <Text style={styles.precoResumo}>R$ {tamanhoPreco.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.containerTotal}>
          <Text style={styles.total}>
            TOTAL: R${' '}
            {(
              recheioPreco +
              coberturaPreco +
              decoracaoPreco +
              formatoPreco +
              tamanhoPreco
            ).toFixed(2)}
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              title="Confirmar Pedido"
              onPress={confirmarPedido}
              buttonStyle={styles.button}
              containerStyle={styles.buttonInnerContainer}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    backgroundColor: '#FA8CD0',
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secao: {
    marginTop: 20,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  containerResumo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FDCFEB',
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  textResumo: {
    fontSize: 16,
  },
  precoResumo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 5,
    backgroundColor: 'rgba(255,102,196, 1)',
    borderRadius: 25,
  },
  buttonInnerContainer: {
    marginTop: 20,
    height: 50,
    width: 200,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  containerTotal: {
    alignItems: 'center',
    marginTop: 20,
  },
});
