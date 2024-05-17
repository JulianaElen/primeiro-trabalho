import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tela1 from './src/screen/Tela1';
import Tela2 from './src/screen/Tela2';
import Tela3 from './src/screen/Tela3';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Inicio" 
        component={Tela1} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="TelaCompras" 
        component={Tela2} 
        options={{
          title: "Monte seu Bolo"
        }}
        />
        <Stack.Screen 
        name="TelaConfirmacao" 
        component={Tela3} 
        options={{
          title: "Compras"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}