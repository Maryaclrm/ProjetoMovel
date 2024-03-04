import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cat = ({nome, sobrenome}) =>{
  return <Text>Hi guyss, this is Blackpink {getNomeCompleto(nome, sobrenome).toUpperCase()}!</Text>
}

const getNomeCompleto  = (nome, sobrenome) => {
  return nome + ''+ sobrenome;
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
     <Cat nome="Lisa" sobrenome=" Manoban"/>
     <Cat nome="Jennie" sobrenome=" Kim"/>
     <Cat nome="Jisoo" sobrenome=" Kim"/>
     <Cat nome="Rosé" sobrenome=" Park"/>
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
