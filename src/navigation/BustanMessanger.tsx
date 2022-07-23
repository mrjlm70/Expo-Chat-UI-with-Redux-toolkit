import {View,Text,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {HomeScreen} from "../Screens";
import {HomeStack,LoginStack} from "./";
import React,{ useState } from "react";




const Stack = createNativeStackNavigator();
const BustanMessanger =()=>{
    const [isLoggin, setIsLoggin] = useState(false);

    return(
    <NavigationContainer>
        {isLoggin ? <HomeStack/>  : <LoginStack/>}
    </NavigationContainer>

)
}
export default BustanMessanger;

const styles=StyleSheet.create({
container:{
flex:1
}
})