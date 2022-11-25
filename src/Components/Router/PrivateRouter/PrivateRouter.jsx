import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    if(loading){
        <button className="btn loading">loading</button>
    }
    const location = useLocation()
   if(!user){
    return <Navigate to ='/login' state={{from:location}} replace ></Navigate>
   } 
   return children
};

export default PrivateRouter;