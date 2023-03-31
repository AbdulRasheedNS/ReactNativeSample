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


export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
      userName:'',
      password:''
    }
  }
  SignUp(){
    console.log('signup');
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/signupbackground.jpg')}
          style={styles.BackgroundImage}>
          
          <ImageBackground source={require('./assets/images/signup.png')}
            style={styles.Image} imageStyle={{ borderRadius: 10 }}>
          
            <Text style={styles.textinimage}></Text>
          
          </ImageBackground>
          <TextInput style={styles.textInput} placeholder='User Name' placeholderTextColor={'white'}
            maxLength={20} />
          
          <TextInput style={styles.textInput} placeholder='Enter email' placeholderTextColor={'white'}
            maxLength={20} />
          
          <View style={{flexDirection:'row'}}>
            <TextInput style={[styles.textInput, {
              width: '16%',
              marginRight:16}]} placeholder='Code' placeholderTextColor={'white'} maxLength={20} />

            <TextInput style={[styles.textInput, {
              width: '60%'
            }]} placeholder='Mobile Number' placeholderTextColor={'white'}
              maxLength={20} />
          </View>
          
          <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor={'white'}
            secureTextEntry={true} />
          
          <TouchableHighlight style={styles.Button} onPress={()=>this.SignUp()}>
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image: {
    marginBottom: 50,
    width: 150,
    height: 150
  },
  textInput: {
    marginTop: 10,
    padding: 7,
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    width: '80%',
    height: 50,
    borderRadius: 10,
    fontSize: 17,
    backgroundColor: 'rgba(4, 25, 31, 0.3)'
  },
  Button: {
    alignItems: "center",
    justifyContent: 'center',
    height: 40,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 3,
    marginTop: 10
  },
  ButtonText: {
    color: 'white',
    fontSize: 20
  },
  textinimage: {
    top: 120,
    alignSelf: 'center'
  }
})