import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cat = () =>{
  return <Text>Hi guyss, this is Blackpink {getNomeCompleto("Rosé", "Park").toUpperCase()}</Text>
}

const getNomeCompleto  = (nome, sobrenome) => {
  return nome + ''+ sobrenome;
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
     <Cat/>
     <Cat/>
     <Cat/>
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
