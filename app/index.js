import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View} from 'react-native';
import { Link } from'expo-router';

const getNomeCompleto  = (nome, sobrenome) => {
  return nome + ' ' + sobrenome;
}

const Cat = ({id, nome, sobrenome, idade}) =>{
  const texto = (idade <= 1) ? "ano" : "anos";

  return (
  <Link href={{
    pathname: "/gatos/[id]"
    params: {id: id}
  }}>Oi gente, somos o Blackpink {getNomeCompleto(nome, sobrenome).toUpperCase()}! e eu tenho {idade} {texto} e meu id é {id}. </Link>
  );
}

function IFAL(){

  return (
    <View style={styles.container}>
     <Cat  id={1} nome="Lisa" sobrenome=" Manoban" idade={26}/>
     <Cat id={2} nome="Jennie" sobrenome=" Kim" idade={28}/>
     <Cat id={3} nome="Jisoo" sobrenome=" Kim " idade={29}/>
     <Cat id={4} nome="Rosé" sobrenome=" Park" idade={27}/>
     <Link href="/calculadora">Abrir Calculadora</Link>
     <Link href="/cliques" asChild>
        <Button title="Abrir Contador de Cliques"/>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default IFAL;