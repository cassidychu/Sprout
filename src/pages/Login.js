import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({navigation}) => {
    const handleSignUp = () => {
        //Navigate to sign up page
        navigation.navigate('RegisterPage');
    };

    const handleContinueButton = () => {
        //Perform login action
        //Put login request here to backend server
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.description}>Welcome back Sprouter! Come check up on your plants today!</Text>
            <Text style={styles.inputTextEmail}>Email</Text>

            <TextInput style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            keyboardType='email-address'
            />
            <Text style={styles.inputTextPassword}>Password</Text>

            <TextInput style={styles.input}
            placeholder='Password'
            secureTextEntry
            />

            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink} title="Go to SignUp"
                 onPress={() => {navigation.navigate('RegisterPage ')}}> Don't have an account? Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinueButton}>
                <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>
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
    input:{
        width:'100%',
        height: 56,
        borderColor: '#707070',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginBottom:10,
        color:'#3F6766',
    },

    signUpLink:{
        color:'#3F6766',
        marginBottom:20,
    },

    continueButton:{
        backgroundColor:'#3F6766',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
        height:52,
        width:262,
        justifyContent:'center',
        alignItems:'center',

    },

    continueButtonText:{
        color:'white',
        fontSize:23,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },

    inputTextEmail:{
        color:'#3F6766',
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',
    },

    inputTextPassword:{
        color:'#3F6766',
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',
    },
});

export default Login;
