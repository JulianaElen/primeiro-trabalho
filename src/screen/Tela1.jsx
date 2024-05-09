import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Tela1() {

  const nav = useNavigation();
  return (

    <View>
      <Text>Tela1</Text>
      <Button
      title='Fazer Pedido'
      onPress={ () => nav.navigate("TelaBolos")}
      />
    </View>
  )
}