import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import AuthProvider from './src/context/AutenticationContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Tela1 from './src/screen/Tela1';
import Tela2 from './src/screen/Tela2';
import Tela3 from './src/screen/Tela3';
import Tela4 from './src/screen/Tela4';
import Tela5 from './src/screen/Tela5';
import Tela6 from './src/screen/Tela6';



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name='TelaInicio' component={Tela1} />
          <Stack.Screen name='TelaBolos' component={Tela2} />
          <Stack.Screen name='TelaDoces' component={Tela3} />
          <Stack.Screen name='TelaEntregaPagamento' component={Tela4} />
          <Stack.Screen name='TelaResumoPedido' component={Tela5} />
          <Stack.Screen 
          name='TelaConfirmacao' 
          component={Tela6} 
          options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}