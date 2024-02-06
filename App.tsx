/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfiles from './pantallas/Perfiles';
import Inicio from './pantallas/inicio';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Perfil'component={Perfiles}/>
        <Stack.Screen name='Home'component={Inicio}/>    
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App
