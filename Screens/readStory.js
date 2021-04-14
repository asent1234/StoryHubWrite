import * as React from "react";
import {Text, TouchableOpacity, View, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid, Platform, Alert } from "react-native"
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
import db from "../config"
import firebase from 'firebase'

export default class BookTransaction extends React.Component{
  
constructor(){
super();
this.state = {

}
}


render(){
    return(
      <View>
        <Text></Text>
      </View>
    );   
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  }
});

