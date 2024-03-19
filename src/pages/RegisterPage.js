// RegisterPage.js
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from "react";


const RegisterPage = () => {

    const [email, setEmail] = useState("testingEmail@gmail.com");
    const [password, setPassword] = useState("password");
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        setLoading(true);
        try{
            const user = await signup(email, password) //have to make a signup function
            if()

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
