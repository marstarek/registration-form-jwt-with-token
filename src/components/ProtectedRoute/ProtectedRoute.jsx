import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({ children }) => {
    function hasJWT() {
        let flag = false;
  
        localStorage.getItem("token") ? flag=true : flag=false
       
        return flag
    }
    if (hasJWT()) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' />
    }

}

export default ProtectedRoute