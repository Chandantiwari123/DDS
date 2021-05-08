import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const UserComponent = ({Callback,name}) => {
    sendData = (val) =>{
        Callback(val);
    }
    return (
        <View style={{height:700,alignItems:'center',justifyContent:'center'}}>
            <Text>User name: {name}</Text>
            <TouchableOpacity onPress={()=>sendData(0)} style={{marginTop:20,backgroundColor:'black',width:250,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
            <Text
            style={{
                color:'white'
            }}
            >GO BACK</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserComponent;