import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import StarEmpty from "./StarEmty";
import Starfield from "../Starfield";
import StarHalf from "./StarHalf";


export type EvalProps = {
    calificacion: number;
    onCalificacionChange: any;
};

export type StarProp ={
    posicion: number;
    onClick: any;
};

const Evaluacion = (props: EvalProps)=>{

    const handleOnClick = (posicion:number) => {
        props.onCalificacionChange(posicion+1)

    }

    return(
        <View style={styles.contenedor}>
            {props.calificacion == 0 && <StarEmpty onClick={handleOnClick} posicion={0}/>}
            {props.calificacion == 1 && <StarHalf onClick={handleOnClick} posicion={0}/>}
            {props.calificacion > 1 && <Starfield onClick={handleOnClick} posicion={0}/>}
            {props.calificacion < 2 && <StarEmpty onClick={handleOnClick} posicion={1}/>}
            {props.calificacion == 2 && <StarHalf onClick={handleOnClick} posicion={1}/>}
            {props.calificacion > 2 && <Starfield onClick={handleOnClick} posicion={1}/>}
            {props.calificacion < 3 && <StarEmpty onClick={handleOnClick} posicion={2}/>}
            {props.calificacion == 3 && <StarHalf onClick={handleOnClick} posicion={2}/>}
            {props.calificacion > 3 && <Starfield onClick={handleOnClick} posicion={2}/>}
            {props.calificacion < 4 && <StarEmpty onClick={handleOnClick} posicion={3}/>}
            {props.calificacion == 4 && <StarHalf onClick={handleOnClick} posicion={3}/>}
            {props.calificacion > 4 && <Starfield onClick={handleOnClick} posicion={3}/>}
            {props.calificacion < 5 && <StarEmpty onClick={handleOnClick} posicion={4}/>}          
            {props.calificacion >= 5 && <Starfield onClick={handleOnClick} posicion={4}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        display:'flex',
        flexDirection: 'row',
        margin: 5,
    }

})

export default Evaluacion;