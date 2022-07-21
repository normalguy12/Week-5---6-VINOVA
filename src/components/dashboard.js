import React from 'react'
import '../App.css'
import View from './view'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'




function Dashboard() {
  const navigate = useNavigate();
  const Logout = () =>{
    localStorage.setItem('token', 0);
    navigate('/');
    console.log(localStorage.getItem('token'))
  }
  
  return (
    <div className="row">
      <div className="column left">
      <nav>
        <div className='dashboard'><Link  to="/dashboard">DASHBOARD</Link></div><br/>
        <Link className='post' to="/post">POST</Link><br/>
        <Link className='users' to="/users">USERS</Link><br/>
        <Link className='account' to="/account">ACCOUNT</Link><br/>
        <Link className='todo' to="/todo">TO DO</Link>
      </nav>
      </div>
      <div className="column middle">
        <h1>Dashboard Page</h1>
      </div>
      <div className="column right">
        <Button onClick={Logout}>Log out</Button>
        <View/>
      </div>
    </div>
  )
}

export default Dashboard