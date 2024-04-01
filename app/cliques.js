import { Button, Text, View } from 'react-native';
import { useState } from 'react';

function Cliques(){
    const [cliques, setCliques] = useState(0);

return(
    <View>
<Button title="Clique aqui se você for linda" onPress={() =>{
      setCliques(cliques + 1);
    }}/>
    <Button title="zerar" onPress={() =>{
      setCliques(0);
      }}/>   
    <Text>Cliques: {cliques}</Text>
    <Link href="/index">abrir</Link>
    </View>
);

    };
export default Cliques;