import React from 'react'
import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tela1 from './src/screen/Tela1'; //Tela inicial
import Tela2 from './src/screen/Tela2'; //Tela de compras
import Tela3 from './src/screen/Tela3'; //Tela de confirmacao
import Tela4 from './src/screen/Tela4'; //Tela de login
import Tela6 from './src/screen/Tela6'; //Tela de pedidos
import Tela5 from './src/screen/Tela5'; //Tela de Informações

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='TelaLogin'
        component={Tela4}
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="TelaInicial" 
        component={Tela1} 
        options={{ title: "Sair", headerStyle: {backgroundColor: '#D2C4D8',}, }} 
        />
        <Stack.Screen
        name='TelaPedidos'
        component={Tela6}
        options={{title: "Meus Pedidos", headerStyle: {backgroundColor: '#D2C4D8',},}}
        />
        <Stack.Screen 
        name="TelaCompras" 
        component={Tela2} 
        options={{ title: "Monte seu Bolo" , headerStyle: {backgroundColor: '#D2C4D8',},}}
        />
        <Stack.Screen 
        name="TelaConfirmacao" 
        component={Tela3} 
        options={{ title: "Pedido", headerStyle: {backgroundColor: '#D2C4D8',}, }}
        />
        <Stack.Screen 
        name="TelaInfo" 
        component={Tela5} 
        options={{ title: "Informações sobre o projeto", headerStyle: {backgroundColor: '#D2C4D8',}, }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}