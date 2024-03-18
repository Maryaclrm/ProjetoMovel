import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const entrar = (props) => {
  const [isEntrar, setIsEntrar] = useState(true);
};

const App = () => {
  const [isEntrar, setIsEntrar] = useState(true);

  return (
    <View>
      <Text>-s-e-t-a-</Text>
      <Text>Ajuda</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Email ou número de telefone"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Senha"
      />
      <Button
        onPress={() => {
          setIsEntrar(false);
        }}
        disabled={!isEntrar}
        title={isEntrar ? 'Entrar' : ''}
      />
      <Text>Você entrou na netflis vivaaaa</Text>
    </View>
  );
};

export default App;
