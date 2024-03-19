import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React from 'react';

export const signUp = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await emailVerification
    }
}