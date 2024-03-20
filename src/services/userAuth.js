import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import React from 'react';

export const signUp = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        //maybe add email verification to this
        const user = userCredential.user;
        console.log("User registered: ", user)
        //redirect the user to login page or home page

        return user;
    }catch (error){
        throw error;
    }
}