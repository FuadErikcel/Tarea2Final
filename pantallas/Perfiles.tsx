import React, {useState} from 'react';

import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Inicio from './inicio';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Evaluacion from '../components/evaluacion/Evaluacion';



const Perfiles = ({navigation})=>{

  const [calificacion, setCalificacion] = useState(0);

  const handleCalificacionChange = (valor: number) =>{ 
    if(calificacion == 1 && valor == 1){
      setCalificacion(0);
    }else{
    setCalificacion(valor);
    }
  }

    const handlePress = () =>{
      navigation.navigate('Home');
    }

  

    return (
        <View style={styles.container2}>
      <SafeAreaView>
          <ScrollView 
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior='automatic'> 
          <Image style={styles.fotoPerfil} source={require('../Images/IMG_189656.jpg')}/>
          <Evaluacion calificacion={calificacion}
          onCalificacionChange={handleCalificacionChange} />
          <View style={styles.container}>
              <Text style={styles.seccionHeader}>Nombre:</Text>
              <Text style={styles.seccionContent}>Fuad Erikcel Dominguez Betancourth</Text>
           </View>
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
              <Text style={styles.seccionContent}>Comayagua, Comayagua</Text>
           </View>
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
              <Text style={styles.seccionContent}>03 de Junio de 2002</Text>
           </View> 
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Pasatiempos:</Text>
              <Text style={styles.seccionContent}>Mis pasatiempos favoritos son practicar fútbol
                basketball, jugar al FIFA y Call Of Duty, tambien me gusta compartir
                tiempo con mis amigos y familia.
              </Text>
           </View>
              <Button  title='Inicio' onPress={handlePress}/>
          </ScrollView>
        </SafeAreaView>
              </View>
      );
}

const styles = StyleSheet.create({
    encabezado: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#A8D39E'
    },
    svContenedor: {
      alignItems: 'center',
    },
    fotoPerfil:{
      width: 200,
      height: 220,
      borderWidth: 2, 
      borderColor: 'black', 
      borderRadius: 10,
      marginTop: 15
    },
    seccion: {
      flexDirection: 'row'
    },
    seccionHeader:{
      fontSize: 18,
      fontWeight: 'bold',
      
    },
    seccionContent:{
      fontSize: 16,
    },
    container:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      padding: 15,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      backgroundColor: 'lightblue',  
    },

    container2:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      borderWidth: 2,
      borderColor: 'black',

      backgroundColor: '#284453',  
    },

  });

  export default Perfiles;