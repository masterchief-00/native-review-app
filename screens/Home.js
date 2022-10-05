import React from 'react';
import { Text, View, Button } from "react-native";
import { globalStyles } from '../styles/Global';

export default function Home({navigation}){
    const pressHandler=()=>{
        navigation.navigate('Review details')
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button style={globalStyles.button} title='Go to reviews page' onPress={pressHandler} />
        </View>
    )
}