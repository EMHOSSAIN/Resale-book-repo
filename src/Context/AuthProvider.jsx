import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import SignUp from '../Components/Share/Signup/SignUp';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createNewuser = (email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email,password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }
    const googlesignup = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,currentUsers=>{
            setUser(currentUsers)
            setLoading(false)
          })
  
          return()=> Unsubscribe()

    },[])

    const authinfo = {
        user,
        createNewuser,
        login,
        logout,
        googlesignup,

    }
    return (
        <div>
            <AuthContext.Provider value={authinfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;