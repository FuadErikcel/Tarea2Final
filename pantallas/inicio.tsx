import  React, {useState}  from "react";
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';
import Perfiles from "./Perfiles";
import { useNavigation } from "@react-navigation/native";
import Evaluacion from '../components/evaluacion/Evaluacion';


const Inicio = ()=>{

  const [calificacion, setCalificacion] = useState(0);

  const handleCalificacionChange = (valor: number) =>{ 
    if(calificacion == 1 && valor == 1){
      setCalificacion(0);
    }else{
    setCalificacion(valor);
    }
  }
    return(
      <View style={styles.container2}>
        <SafeAreaView>
          <ScrollView 
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior='automatic'>
          <Image style={styles.fotoPerfil} source={require('../Images/descarga.jpeg')}/>
          <Evaluacion calificacion={calificacion}
          onCalificacionChange={handleCalificacionChange} />
          <View style={styles.container}>
              <Text style={styles.seccionHeader}>Nombre:</Text>
              <Text style={styles.seccionContent}>Kobe Bean Bryant</Text>
           </View>
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
              <Text style={styles.seccionContent}>Filadelfia, Pensilvania, Estados Unidos</Text>
           </View>
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
              <Text style={styles.seccionContent}>23 de Agosto de 1978</Text>
           </View> 
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Fecha de Fallecimiento:</Text>
              <Text style={styles.seccionContent}>26 de Enero de 2020</Text>
           </View> 
           <View style={styles.container}>
              <Text style={styles.seccionHeader}>Biografia:</Text>
              <Text style={styles.seccionContent}>Kobe Bean Bryant
              fue un baloncestista estadounidense que jugaba en la posición de escolta. 
              Disputó veinte temporadas en la NBA, todas ellas en Los Angeles Lakers. 
              Hijo del exjugador de baloncesto Joe Bryant, está considerado como uno de los mejores baloncestistas de todos los tiempos.
              </Text>
           </View>
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
      padding: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      backgroundColor: 'white',  
    },

    container2:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: 'white',  
    },
  });

export default Inicio;