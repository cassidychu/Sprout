// RegisterPage.js
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from "react";
import { signUp } from "../services/auth"


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
          else if{
            
          }
        }
    }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Page</Text>
      <TextInput placeholder="Username" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10 }} />
      <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10 }} />
      <Button title="Log In" onPress={() => console.log('Login Pressed')} />
    </View>
  );
};

export default RegisterPage;
