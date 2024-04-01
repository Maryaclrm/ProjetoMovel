import { Button, Text, TextInput, View} from 'react-native';
import {useState} from 'react';


const Somar = () => {
    const [parcela1, setParcela1] = useState(0);
    const [parcela2, setParcela2] = useState(0);
    const [soma, setSoma] = useState(0);

  const [texto, setTexto] = useState('');
  return(
    <View>
        <Text>Calculeitour</Text>
        <TextInput defaultValue={parcela1.toString()} onChangeText={(texto) => setParcela1(Number(texto))}/> 
        <TextInput defaultValue={parcela2.toString()} onChangeText={(texto) => setParcela2(Number(texto))}/> 
        <Button title="Somar" onPress={() => setSoma(parcela1 + parcela2)}/>
        <Text>Soma: {soma}</Text>
    </View>
  )
}

export default Somar;