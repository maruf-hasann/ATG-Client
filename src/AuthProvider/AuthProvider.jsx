import React, { createContext, useEffect, useState } from 'react';
import apps from '../Firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(apps);

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
     const signIn = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
     };
 const createUser = (email, password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
    };
     const logOut = () => {
       setLoading(true);
       return signOut(auth);
    };
    
    const loginGoogle = () => {
         setLoading(true);
        return signInWithPopup(auth,provider)
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        // console.log("current user", currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);

   
    const authInfo = {
      user,
      loading,
      createUser,
      logOut,
      loginGoogle,
      signIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;