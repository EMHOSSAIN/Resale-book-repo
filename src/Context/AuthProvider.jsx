import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createNewuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googlesignup = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUser = (userinfo) => {
        setLoading(true)
        return updateProfile(auth, userinfo)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUsers => {
            setUser(currentUsers)
            setLoading(false)
        })

        return () => Unsubscribe()

    }, [])

    const authinfo = {
        user,
        loading,
        createNewuser,
        updateUser,
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