import React from 'react';
import { View } from 'react-native';

import Topo from './componentes/Topo';
import Texto from './componentes/Texto';
import Cards from './componentes/Cards';

export default function App () { 
  return (
    <View>
      <Topo />
      <Texto />
      <Cards />
    </View>
  );
}