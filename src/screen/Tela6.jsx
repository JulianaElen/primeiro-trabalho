import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ListItem} from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Tela6() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoExpandidoId, setPedidoExpandidoId] = useState(null);

  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await fetch(
        'https://backendmobile-j6vq.vercel.app/pedidosdm/',
      );
      const data = await response.json();
      setPedidos(data);
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
    }
  };

  const formatarData = data => {
    const date = new Date(data);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const togglePedidoExpandido = id => {
    if (pedidoExpandidoId === id) {
      setPedidoExpandidoId(null);
    } else {
      setPedidoExpandidoId(id);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <>
            <ListItem>
              <ListItem.Content style={styles.item}>
                <View>
                  <Text style={styles.title}>Pedido {item.id}</Text>
                  <Text>Data: {formatarData(item.data_pedido)}</Text>
                  <Text>Total: R$ {item.total}</Text>
                </View>
                <View>
                  <Icon
                    name={
                      pedidoExpandidoId === item.id
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    size={20}
                    color={'black'}
                    onPress={() => togglePedidoExpandido(item.id)}
                  />
                </View>
              </ListItem.Content>
            </ListItem>
            {pedidoExpandidoId === item.id && (
              <View style={styles.descricaoContainer}>
                <Text style={styles.descricaoTitulo}>Descrição do Pedido:</Text>
                <Text>Recheio: {item.recheio}</Text>
                <Text>Cobertura: {item.cobertura}</Text>
                <Text>Decoração: {item.decoracao}</Text>
                <Text>Formato: {item.formato}</Text>
                <Text>Tamanho: {item.tamanho}</Text>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 2,
    borderTopColor: '#f3e7f7',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  descricaoContainer: {
    backgroundColor: '#f3e7f7',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  descricaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
