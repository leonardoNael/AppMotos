import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Esportivas from './Esportivas';
import Scooters from './Scooters';
import OffRoads from './OffRoads';
import Home from './home'

const Stack = createStackNavigator();

export default function Rotas(){
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component = {Home} />
    <Stack.Screen name="Esportivas" component = {Esportivas} />
    <Stack.Screen name="Scooters" component = {Scooters} />
    <Stack.Screen name="OffRoad" component = {OffRoads} />
  </Stack.Navigator>
</NavigationContainer>
)
}