import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import { Link } from'expo-router';

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
function IFAL(){

  return (
    <View>
     <Cat nome="Lisa" sobrenome=" Manoban" idade={26}/>
     <Cat nome="Jennie" sobrenome=" Kim" idade={28}/>
     <Cat nome="Jisoo" sobrenome=" Kim " idade={29}/>
     <Cat nome="Rosé" sobrenome=" Park" idade={27}/>
      <StatusBar style="auto" />
    <Link href="/calculadora">Abrir Calculadora</Link>
    </View>
  );
  };

export default IFAL;