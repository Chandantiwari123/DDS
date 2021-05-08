import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialComponent from './InitialComponent';
import AdminComponent from './AdminComponent';
import UserComponent from './UserComponent';
import { StatusBar } from 'expo-status-bar';
class MainComponent extends React.Component {
    state = { value: 0, name:null}
    callbackFunction = (newvalue) => {
          this.setState({value: newvalue})
    }
    nameChange = (newname) => {
        this.setState({name: newname})
        console.log(this.state);
    }
     render() {
            if(this.state.value == 0){
                return (
                    <InitialComponent Callback = {this.callbackFunction} nameChange = {this.nameChange} error={null}/>
                )
            }
            if(this.state.value == 1 && this.state.name!=null && this.state.name!=""){
                return (
                    <AdminComponent Callback = {this.callbackFunction} name = {this.state.name}/>
                )
            }
            if(this.state.value == 2 && this.state.name!=null && this.state.name!=""){
                return (
                    <UserComponent Callback = {this.callbackFunction} name = {this.state.name}/>
                )
            }
            if(this.state.value!=0 && (this.state.name==null || this.state.name==""))
            {
                this.state.value = 0;
                return (
                <InitialComponent Callback = {this.callbackFunction} nameChange = {this.nameChange} error = {"*Please enter your user name..."}/>
                )
            }
    }
    }
    export default MainComponent