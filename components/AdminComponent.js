import React, { useState } from 'react';
import { View,Text,Button, TouchableOpacity, TextInput, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const AdminComponent = ({Callback,name}) => {
    const sendData = (val) =>{
        Callback(val);
    }
const DATA = [
    {
      id: 1,
      title: 'User_1',
    },
    {
      id: 2,
      title: 'User_2',
    },
    {
      id: 3,
      title: 'User_3',
    },
  ];
const Item = ({ title }) => (
    <View style={{flexDirection: "row"}}>
        <Text style={{marginTop:24}}>{title}                                 </Text>
        <TouchableOpacity style={{marginTop:20,backgroundColor:'black',width:150,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
         <Text
        style={{
            color:'white'
            }}
            >Connect</Text>
        </TouchableOpacity>
    </View>
  );


    
    const [flag,setFlag] = useState(0);
    const changeVal = (val) =>{
        setFlag(val);
    }
    if(flag==0){
    return (
            <View style={{height:700,alignItems:'center',justifyContent:'center'}}>
                <Text>User Name : {name}</Text>
                <Text style={{marginRight:200,marginTop:20}}>link: </Text>
                <TextInput
                style={{width:225,height:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderBottomWidth:1 }}
                //onChangeText={text => this.onchangeText(text)}
                />
                <TouchableOpacity onPress={()=>changeVal(1)} style={{marginTop:20,backgroundColor:'black',width:250,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
                <Text
                style={{
                    color:'white'
                }}
                >Connect with User</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sendData(0)} style={{marginTop:20,backgroundColor:'black',width:250,height:35,alignItems:'center',justifyContent:'center',borderRadius:100}}>
                <Text
                style={{
                    color:'white'
                }}
                >GO BACK</Text>
                </TouchableOpacity>
            </View>
    )}
    else {
        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );
        return(
           <ScrollView>
            <SafeAreaView style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
            <FlatList
                    
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            <View>
                <TouchableOpacity style={{marginTop:20,backgroundColor:'black',width:250,height:35 ,alignItems:'center',justifyContent:'center',borderRadius:100}}>
                <Text
                style={{
                    color:'white'
                }}
                >DOWNLOAD</Text>
                </TouchableOpacity>
            </View>    
            <View>
                <TouchableOpacity onPress={()=>sendData(0)} style={{marginTop:20,backgroundColor:'black',width:250,height:35 ,alignItems:'center',justifyContent:'center',borderRadius:100}}>
                <Text
                style={{
                    color:'white'
                }}
                >GO BACK</Text>
                </TouchableOpacity>
            </View>    
        </SafeAreaView>
        </ScrollView>
        )
    }
}

export default AdminComponent;

