import React from 'react';
import {Text, View,TouchableOpacity,TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
class InitialComponent extends React.Component{sendData = (val) => {
    this.props.Callback(val);
}
onchangeText = (text) => {
    this.props.nameChange(text);
}
render() { 
//Any time you wish to send data from child to parent component, call the sendData function.

return (
    <View style={{height:700,alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginRight:180}}>Name: </Text>
        <TextInput
        style={{ marginBottom:20,width:225,height:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderBottomWidth:1 }}
        onChangeText={text => this.onchangeText(text)}
        />
        <TouchableOpacity onPress={()=>this.sendData(1)} style={{marginBottom:20,backgroundColor:'black',width:250,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
            <Text
            style={{
                color:'white'
            }}
            >CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.sendData(2)} style={{backgroundColor:'black',width:250,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
            <Text
            style={{
                color:'white'
            }}
            >JOIN</Text>
        </TouchableOpacity>
        <Text
        style={{
            color:'red',
            marginTop:20
        }}
        >{this.props.error}</Text>

    </View>
)
}
}

export default InitialComponent;
