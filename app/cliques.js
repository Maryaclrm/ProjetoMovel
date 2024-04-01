import { Button, Text, View } from 'react-native';
import { useState } from 'react';

function Cliques = () =>{
    const [getCliques, setCliques] = useState(0);

    return(
        <View>
            <Button title='OK' onPress={() => {
                setCliques(getCliques + 1)
            }}/>
            <Text>Quantidade de cliques: {getCliques}</Text>    
        </View>
)
 }
 
export default Cliques;