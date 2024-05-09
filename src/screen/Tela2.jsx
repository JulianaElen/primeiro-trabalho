import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Tela2() {

  const nav = useNavigation();

  return (

    <View>
      <Text>Tela2</Text>
      <Button
      title='Escolher Doces'
      onPress={ () => nav.navigate("TelaDoces")}
      />
    </View>
  )
}