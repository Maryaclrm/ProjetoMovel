import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cat = ({nome, sobrenome, idade}) =>{
  return <Text>Oi gente, somos o Blackpink {getNomeCompleto(nome, sobrenome, idade).toUpperCase()}! e eu tenho {idade} anos.</Text>
}

const getNomeCompleto  = (nome, sobrenome) => {
  return nome + ''+ sobrenome;
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
     <Cat nome="Lisa" sobrenome=" Manoban" idade={26}/>
     <Cat nome="Jennie" sobrenome=" Kim" idade={28}/>
     <Cat nome="Jisoo" sobrenome=" Kim " idade={29}/>
     <Cat nome="Rosé" sobrenome=" Park" idade={27}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09ASON',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
