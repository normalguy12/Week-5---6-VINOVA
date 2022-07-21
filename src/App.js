import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
  <div>
    <h1>HEADER</h1>
    <nav style={{borderBottom: '1px solid', paddingBottom:'1rem'}}>
      <Link to="/login">Login</Link> | {' '}
      <Link to="/signup">Signup</Link> | {' '}
      <Link to="/about">About</Link> | {' '}
      <Link to="/contact">Contact</Link>
    </nav>
    <div className='footer'>
      <h1>FOOTER</h1>
    </div>
  </div>
  );
}

export default App;
