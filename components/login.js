import React from 'react'
// import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Button, Grid, Paper, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const {register, handleSubmit, getValues, formState: {errors}} = useForm({
    defaultValues:{
      ID: 0,
      Firstname: "",
      Lastname: "",
      Phone:"",
      Email: "",
      Password:"",
      Confirm:"",
      Gender:"",
      Hobby:"",
      Hobby1:[],
    }
  });

  const navigate = useNavigate();
  // const [Items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  
  const login = () =>{
    if (getValues("Email") !== localStorage.getItem("Email")){
      alert("Invalid Email !!!")
    }
    else if (getValues("Password") !== localStorage.getItem("Password")){
      alert("Wrong Password !!!")
    }
    else
    {
      localStorage.setItem('token', 1)
      navigate('/dashboard')
    }
  }

  console.log(localStorage.getItem('token'))

  const paperStyle ={padding: "30px 20px", width: 500, margin: "20px auto", fontWeight: "600", lineWeight: "10px"}

  return (
    <Grid>
      <h1>HEADER</h1>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          Log In
        </Grid><br/>
        <form onSubmit={handleSubmit((e)=>{
          console.log(e);
          
        })}>
         
        <TextField fullWidth variant="standard" label="Email" {...register("Email", {required: "*Email is required"})} />{errors.Email?.message} <br/>
        <TextField fullWidth type="password" variant="standard" label="Password" {...register("Password", {required: "*Password is required"})}/>{errors.Password?.message} <br/><br/>
        <Button type ="submit" fullWidth variant="contained" onClick={login}>Log in</Button><br/><br/>
        </form>
      </Paper>
    </Grid>
  )
}

export default Login