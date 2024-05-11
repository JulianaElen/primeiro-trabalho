import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6'

const Stack = createNativeStackNavigator();
const TabButton = createBottomTabNavigator();

import Tela1 from './src/screen/Tela1';
import Tela2 from './src/screen/Tela2';
import Tela3 from './src/screen/Tela3';
import Tela4 from './src/screen/Tela4';
import Tela5 from './src/screen/Tela5';
import Tela6 from './src/screen/Tela6';
import AuthProvider from './src/context/AutenticationContext';

export default function App() {
  return (
    // Cria o Tab Button para navegação entre as telas de inicio, compra e carrinho.
    <NavigationContainer>
      <AuthProvider>
      <TabButton.Navigator>
        <TabButton.Screen
          name="TelaInicio"
          component={Tela1}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="house" color='purple' size={25} />
            ),
            tabBarLabel: ''
          }}
        />
        <TabButton.Screen
          name="TelaCompras"
          component={TelaComprasStack}
          options={{
            title: 'Escolha seus Produtos',
            tabBarIcon: () => (
              <Icon name="bag-shopping" color='purple' size={25} />
            ),
            tabBarLabel: ''
          }}
        />
        <TabButton.Screen
          name="TelaCarrinho"
          component={TelaCarrinhoStack}
          options={{
            title: 'Carrinho de compras',
            tabBarIcon: () => (
              <Icon name="cart-shopping" color='purple' size={25} />
            ),
            tabBarLabel: ''
          }}
        />
      </TabButton.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

//Funçao que cria a Stack na tela de compras
function TelaComprasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaCompra" component={Tela2} options={{ headerShown: false }} />
      <Stack.Screen name="TelaBolos" component={Tela4} />
      <Stack.Screen name="TelaDoces" component={Tela5} />
    </Stack.Navigator>
  )
}

//Função que cria a Stack no carrinho
function TelaCarrinhoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaCarrinhos" component={Tela3} options={{ headerShown: false }} />
      <Stack.Screen name="TelaConfirmacao" component={Tela6} />
    </Stack.Navigator>
  )
}
