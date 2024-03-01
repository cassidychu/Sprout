import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from './firebaseConfig';



export default function App() {

  const [username, setName] = useState('') 
  const [email, setEmail] = useState('') 

  function create(){

    setDoc(doc(db, "users", "LA"), {
      username: username,
      email: email,
    }).then(()=> {
      console.log('data submitted');
    }).catch((error)=>{
      console.log(error);
    });

  }

  return (
    <View style={styles.container}>
      <Text>Firebase Data Posting</Text>

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>
      <button onClick = { create }>Submit Button</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
