import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Signup from './components/signup';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Post from './components/post';
import Users from './components/users';
import Account from './components/account';
import Todo from './components/todo';
import PrivateRoute from './privateRoute.js/privateRoute';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Router>
        
        <Routes>
          <Route exact path='/' element={<App/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          {/* <Route element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          </Route> */}
          <Route exact path='/post' element={<Post/>}></Route>
          <Route exact path='/users' element={<Users/>}></Route>
          <Route exact path='/account' element={<Account/>}></Route>
          <Route exact path='/todo' element={<Todo/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          
        </Routes>      
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
