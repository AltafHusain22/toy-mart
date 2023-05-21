import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
 

  if (loading) {
    return (
      <div className="mt-20 flex justify-center">
		<div className=" mt-10 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-800"></div>
	  </div>
    );
  }

  if(user){
	return children
  }
	return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
  
  
};

export default AuthRequired;
