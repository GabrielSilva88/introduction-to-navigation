import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
    return (
        <View style={style.container}>
            <Text>
                Pagina Sobre.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});