// RegisterPage.js
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { signUp } from "../services/userAuth"


const RegisterPage = () => {

    const [email, setEmail] = useState("testingEmail@gmail.com");
    const [password, setPassword] = useState("password");
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [loading, setLoading] = useState(false);

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register Page</Text>
      <TextInput placeholder="Email" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10 }} keyboardType="email-address" value = {email} onChangeText = {setEmail}/>
      <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10 }} value = {password} onChangeText = {setPassword}/>
      <TouchableOpacity onPress={handleSignup}><Text>Register</Text></TouchableOpacity>
    </View>
  );
};

export default RegisterPage;
