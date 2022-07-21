import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Post() {
  return (
    <div className="row">
      <div className="column left">
      <nav>
        <div className='dashboard'><Link  to="/dashboard">DASHBOARD</Link></div><br/>
        <Link className='post' to="/post">POST</Link><br/>
        <Link className='users' to="/users">USERS</Link><br/>
        <Link className='account' to="/account">ACCOUNT</Link>
      </nav>
      </div>
      <div className="column middle">
        <h1>POST</h1>
      </div>
    </div>
  )
}

export default Post