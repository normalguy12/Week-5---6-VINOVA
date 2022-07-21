import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../components/dashboard';

const useAuth = ()=>{
  if (localStorage.getItem("token") === "1")
  {
    return true;
  }
  else return false;
}

function PrivateRoute() {
  const isAuth = useAuth();
  if (isAuth === true)
  {
    return <Dashboard/>
  }
  else return <Navigate to="/"/>
}

export default PrivateRoute