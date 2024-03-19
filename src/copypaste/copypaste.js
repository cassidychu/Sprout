import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from './firebaseConfig';



export default function App({email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication}) {


  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>


    </View>
  );

  // ********************** DATABASE STUFF ********************************
  
  // const [username, setName] = useState('') 
  // const [email, setEmail] = useState('') 

  // function create(){

  //   setDoc(doc(db, "users", "LA"), {
  //     username: username,
  //     email: email,
  //   }).then(()=> {
  //     console.log('data submitted');
  //   }).catch((error)=>{
  //     console.log(error);
  //   });

  // }

  // return (
  //   <View style={styles.container}>
  //     <Text>Firebase Data Posting</Text>

  //     <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>
  //     <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>
  //     <button onClick = { create }>Submit Button</button>
  //   </View>
  // );

  // ********************** DATABASE STUFF ********************************
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
