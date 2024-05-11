import { View, Text, Button } from 'react-native'

export default function Tela2({ navigation }) {
  return (
    <View>
      <Text>Tela de compras. Colocar botões bonitos para bolos e doces.</Text>
      <Button
        title="Escolher bolo"
        onPress={() => navigation.navigate('TelaBolos')}
      />
      <Button
        title="Escolher doces"
        onPress={() => navigation.navigate('TelaDoces')}
      />
    </View>
  )
}