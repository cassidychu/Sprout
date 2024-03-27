// RegisterPage.js
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from "react";
import { signUp } from "../services/userAuth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const RegisterPage = (navigation) => {

    const [email, setEmail] = useState("testingEmail@gmail.com");
    const [password, setPassword] = useState("password");
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
      //Navigate to sign up page
      navigation.navigate('Login');
  };

    const handleSignup = async () => {
        setLoading(true);
        try{
            const user = await signUp(email, password) //have to make a signup function
            if(user){
              const id = user.id
              //await saveUserData(id, firstName, lastName) -> save to firestore database
              //redirect to login page
            }

        } catch(error){
          setLoading(false);
          if(error.code == "auth/email-already-in-use"){
            alert("Email is already in use. Please use a different email.")
          }
          else if (error.code == "auth/weak-password"){
            alert("Weak password. Please choose a stronger password.")
            
          }
          else{
            alert("Signup error: " + error.message)
          }
        }
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.description}>Welcome to Sprout. A place to learn more about your plants and meet new friends.</Text>
      <TextInput placeholder="First Name" style={styles.inputTextFirstName} keyboardType="first-name" value = {firstName} onChangeText = {setFirstName}/>
      <TextInput placeholder="Last Name" style={styles.inputTextLastName} keyboardType="last-name" value = {lastName} onChangeText = {setLastName}/>
      <TextInput placeholder="Email" style={styles.inputTextEmail} keyboardType="email-address" value = {email} onChangeText = {setEmail}/>
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputTextPassword} value = {password} onChangeText = {setPassword}/>
      
      {/*DIRECT TO LOGIN IF THE USER HAS AN ACCOUNT*/}
      <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginLink} title="Go to Login"
                 onPress={() => {navigation.navigate('Login')}}> If you already have an account, Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}><Text style={styles.signUpButtonText}>Sign Up</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DAE2D5',
    paddingHorizontal:20,
},

  title:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:10,
    color:'#3F6766',
    alignItems: "flex-start",
    marginLeft:20,
},

description:{
    fontSize:20,
    marginBottom:20,
    textAlign:'center',
    color:'#3F6766',
},

inputTextFirstName:{
  color:'#3F6766',
  fontSize:20,
  width:'80%',
  height: 40,
  borderColor: '#707070',
  marginBottom:20,
  borderWidth: 1,
  fontWeight:'bold',
  padding:10,
},

inputTextLastName:{
  color:'#3F6766',
  fontSize:20,
  width:'80%',
  height: 40,
  borderColor: '#707070',
  marginBottom:20,
  borderWidth: 1,
  fontWeight:'bold',
  padding:10,
},

inputTextEmail:{
  color:'#3F6766',
  fontSize:20,
  width:'80%',
  height: 40,
  borderColor: '#707070',
  marginBottom:20,
  borderWidth: 1,
  fontWeight:'bold',
  padding:10,
},

inputTextPassword:{
  color:'#3F6766',
  fontSize:20,
  width:'80%',
  height: 40,
  borderColor: '#707070',
  marginBottom:20,
  borderWidth: 1,
  fontWeight:'bold',
  padding:10,
},

loginLink:{
  color:'#3F6766',
  marginBottom:20,
  fontSize: 10,
  flex:1,
},



  signUpButton:{
    backgroundColor:'#3F6766',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:5,
    height:52,
    width:262,
    justifyContent:'center',
    alignItems:'center',
  },

  signUpButtonText:{
    color:'white',
    fontSize:23,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    
},

});
export default RegisterPage;
