import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'react-native'

const Id = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ID: {id}</Text>
    </View>
  )
}

export default Id