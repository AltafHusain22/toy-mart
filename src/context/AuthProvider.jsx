import React, { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user for signup
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google signUp

  const googleSignUp =()=>{
	setLoading(true)
	return signInWithPopup(auth, provider)
  }

   // loggedInWithUserandPass
   const LoginWithUserAndPass =(email, password)=>{
	setLoading(true)
	return signInWithEmailAndPassword(auth, email, password)
   }

  const userInfo = {
    user,
    createUser,
	googleSignUp,
	LoginWithUserAndPass,
	loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
