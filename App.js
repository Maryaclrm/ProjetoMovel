import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from'react';
import Calculadora from './calculadora';
import TelaLoginNetflix from './TelaloginNetflix';

const getNomeCompleto  = (nome, sobrenome) => {
  return nome + ''+ sobrenome;
}

const Cat = ({nome, sobrenome, idade}) =>{
//let texto = "anos";
//if(idade <= 1){
  //texto = "ano";
//}

const texto = (idade <= 1) ? "ano" : "anos";

  return <Text>Oi gente, somos o Blackpink {getNomeCompleto(nome, sobrenome, idade).toUpperCase()}! e eu tenho {idade} {texto}.</Text>
}


export default TelaLoginNetflix;

function IFAL(){
    const [cliques, setCliques] = useState(0);
  
  return (
    <View style={styles.container}>
     <Cat nome="Lisa" sobrenome=" Manoban" idade={26}/>
     <Cat nome="Jennie" sobrenome=" Kim" idade={28}/>
     <Cat nome="Jisoo" sobrenome=" Kim " idade={29}/>
     <Cat nome="Rosé" sobrenome=" Park" idade={27}/>
      <StatusBar style="auto" />
    <Button title="Clique aqui se você for linda" onPress={() =>{
      setCliques(cliques + 1);
    }}/>
    <Button title="zerar" onPress={() =>{
      setCliques(0);
    }}/>
    <Text>Cliques: {cliques}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09ASON',
    alignItems: 'center',
    justifyContent: 'center',
  },
});