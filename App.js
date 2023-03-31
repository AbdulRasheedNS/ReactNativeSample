import React, { Component } from "react";
import { 
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
 } from "react-native";

 export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/background.jpeg')}
        style={styles.BackgroundImage}>
           <Image source={require('./assets/images/signin.png')}
           style={styles.Image}>
           </Image>
           <TextInput style={styles.textInput} placeholder='User Name' placeholderTextColor={'white'}
           maxLength={20} />
           <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor={'white'}
           secureTextEntry={true}/>
           <TouchableHighlight style={styles.Button}>
            <Text style={styles.ButtonText}>Sign In</Text>
           </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
 }
 const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  BackgroundImage:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  Image:{
    borderRadius:50,
    height:100,
    width:100,
    marginBottom:30
  },
  textInput:{
    marginTop:10,
    padding:7,
    borderColor:'white',
    borderWidth:2,
    color:'white',
    width:'80%',
    height:50,
    borderRadius:10
  },
  Button:{
    alignItems:"center",
    justifyContent:'center',
    height:40,
    width:100,
    backgroundColor:'green',
    borderRadius:3,
    marginTop:10
  },
  ButtonText:{
    color:'white',
    fontSize:20
  }
 })