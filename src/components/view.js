import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {FormControl, MenuItem, Button, Grid, Paper, TextField, Checkbox, FormLabel, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import BT1 from './signup';
function View() {
  const {register, handleSubmit} = useForm({
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

  // const [Items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  const [status, setStatus] = useState("")

  const [gender, setGender] = useState("")
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)

  const handleChange = event => {
    if (event.target.value === "others"){
      setStatus(<TextField fullWidth variant="standard" label="Info" {...register("Gender", {required: "*First name is required"})}/>)
    }
    else
    {
      setStatus("")
    }
  };

  console.log(localStorage)

  console.log(localStorage.getItem('Gender'))

  const paperStyle ={padding: "30px 20px", width: 500, margin: "20px auto", fontWeight: "600", lineWeight: "10px"}

  useEffect(()=>{
    if (localStorage.getItem('check1') === "true")
    {
      setCheck1(true)
    }
    if (localStorage.getItem('check2') === "true")
    {
      setCheck2(true)
    }
    if (localStorage.getItem('check3') === "true")
    {
      setCheck3(true)
    }
    if (localStorage.getItem('check4') === "true")
    {
      setCheck4(true)
    }
    if (localStorage.getItem('checkGender') === "male")
    {
      setGender("male")
    }
    else if (localStorage.getItem('checkGender') === "female")
    {
      setGender("female")
    }
    else{
      setGender("others")
      setStatus(<TextField fullWidth variant="standard" value={localStorage.getItem("Gender")}/>)
    }
  },[])

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          Sign up
        </Grid><br/>
        <form onSubmit={handleSubmit((e)=>{
          console.log(e);
          
        })}>
         <TextField fullWidth variant="standard" value={localStorage.getItem("Firstname")}/> <br/>
         <TextField fullWidth variant="standard" value={localStorage.getItem("Lastname")}/><br/>
         <FormControl fullWidth>
          <TextField
              select
              variant="standard"
              sx={{ width: 500 }}
              value={localStorage.getItem("Hobby")}
            >
              <MenuItem value="Listen to music">Listen to music</MenuItem>
              <MenuItem value="Play game">Play game</MenuItem>
              <MenuItem value="Watch TV">Watch TV</MenuItem>
              <MenuItem value="Others">Others</MenuItem>

            </TextField><br/>
          </FormControl>
          <FormLabel>Hobby1</FormLabel><br></br>
          <FormControlLabel label="Listen to music" control={<Checkbox checked={check1} {...register("Hobby1", {required: "*Hobby1 is required"})} />} value="Listen to music"/>
          <FormControlLabel label="Play game " control={<Checkbox checked={check2} {...register("Hobby1", {required: "*Hobby1 is required"})}/>} value="Play game"/>
          <FormControlLabel label="Watch TV" control={<Checkbox checked={check3} {...register("Hobby1", {required: "*Hobby1 is required"})}/>} value="Watch TV"/> 
          <FormControlLabel label="Others" control={<Checkbox checked={check4} {...register("Hobby1", {required: "*Hobby1 is required"})}/>} value="Others"/><br/>
          <FormLabel>Gender</FormLabel><br></br>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel control={<Radio checked={gender==="female"} name="gender" value="female" {...register("Gender", {required: "*Gender is required"})} />} label="Female"/>
            <FormControlLabel control={<Radio checked={gender==="male"} name="gender" value="male" {...register("Gender", {required: "*Gender is required"})} />} label="Male"/>
            <FormControlLabel control={<Radio checked={gender==="others"} name="gender" value="others" {...register("Gender", {required: "*Gender is required"})} />} label="Others"/>
          </RadioGroup><br/>
          {status}
        <TextField fullWidth variant="standard" value={localStorage.getItem("Email")} /><br/>
        <TextField fullWidth variant="standard" value={localStorage.getItem("Phone")} /><br/>
        <TextField fullWidth type="password" variant="standard" value={localStorage.getItem("Password")}/> <br/>
        <TextField fullWidth type="password" variant="standard" value={localStorage.getItem("Confirm")}/> <br/><br/>
        <Button type ="submit" fullWidth variant="contained" >Sign up</Button><br/><br/>
        <Button fullWidth variant="contained">Reset</Button>

        </form>
      </Paper>
    </Grid>
  )
}

export default View