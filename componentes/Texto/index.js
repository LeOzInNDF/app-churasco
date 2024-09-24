import React from 'react';
import { View, Text } from 'react-native';

import estilos from './estilo';

export default function Texto () {
  return (
    <View style={estilos.boxTexto}>
      <Text style={estilos.boxTextoTitulo}>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>

      <Text style={estilos.boxTextoSubtitulo}>
        Final de semana chegando e vem aquela vontade de fazer um churrasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma média do consumo por pessoa.
      </Text>
    </View>
  );
};