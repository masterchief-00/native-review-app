import React from 'react';
import { Text, View, Button } from "react-native";
import { globalStyles } from '../styles/Global';

export default function ReviewDetails({navigation}){
    const pressHandler=()=>{
        navigation.goBack()
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>Review Details</Text>
            <Button style={globalStyles.button} title='Go to Home' onPress={pressHandler} />
        </View>
    )
}