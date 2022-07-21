import React from 'react'
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import {FormControl, MenuItem, Button, Grid, Paper, TextField, Checkbox, FormLabel, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import store from '../redux/store';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';



const SignupForm = () => {

  const {register, handleSubmit, reset, control, getValues, watch, formState: {errors}} = useForm(
    {
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
        music: false,
        tv: false,
        game: false,
        Hobby1: [],
      }
    });

  // const [Items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [gender, setGender] = useState('')

  const [status, setStatus] = useState('');

  const [hobby, setHobby] = useState("")
  const handleChange = event => {
    setGender(event.target.value)
   
    if (event.target.value === "others"){
      setStatus(<TextField fullWidth variant="standard" label="Info" {...register("Gender", {required: "*First name is required"})}/>)
    }
    else
    {
      setStatus("")
    }
    {errors.Gender.message = ""};

  };

  const handleHobby = (e)=>{
    setHobby(e.target.value)
  }

  const resetForm = () =>{
    reset();
    setGender('')
  }

  const alerting = (value) =>{
    
    if (getValues("Password") !== getValues("Confirm"))
    {
      alert("Please confirm your password !!!")
    }
    if (!!errors.Firstname?.message|| 
      !!errors.Lastname?.message|| 
      !!errors.Phone?.message || 
      !!errors.Email?.message||
      !!errors.Password?.message||
      !!errors.Confirm?.message||
      !!errors.Gender?.message||
      !!errors.Hobby?.message||
      !!errors.music?.message) 
      {
        
      }
    else
    {
        //REDUX STORE
        const user = {
          Firstname: getValues("Firstname"),
          Lastname: getValues("Lastname"),
          Phone: getValues("Phone"),
          Email: getValues("Email"),
          Password: getValues("Password"),
          Confirm: getValues("Confirm"),
          Gender: getValues("Gender"),
          Hobby: getValues("Hobby"),
          music: getValues("music"),
          tv: getValues("tv"),
          game: getValues("game"),
        }
        
    }
  }
  

  const paperStyle ={padding: "30px 20px", width: 500, margin: "20px auto", fontWeight: "600", lineWeight: "10px"}


  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          Sign up
        </Grid><br/>
        <form onSubmit={handleSubmit((e)=>{
          console.log(e);
          
        })}>
         <TextField fullWidth variant="standard" label="First Name" {...register("Firstname", {required: "*First name is required"})}/>{errors.Firstname?.message} <br/>
         <TextField fullWidth variant="standard" label="Last Name" {...register("Lastname", {required: "*Last name is required"})}/>{errors.Lastname?.message}<br/>
         <FormControl fullWidth>
          <TextField
              select
              variant="standard"
              sx={{ width: 500 }}
              label="Hobby" 
              value={hobby}
              inputProps={register('Hobby', {
                required: '*Hobby is required',
              })}
              onChange={handleHobby} 
            >
              <MenuItem value="Listen to music">Listen to music</MenuItem>
              <MenuItem value="Play game">Play game</MenuItem>
              <MenuItem value="Watch TV">Watch TV</MenuItem>
              <MenuItem value="Others">Others</MenuItem>

            </TextField>{errors.Hobby?.message}<br/>
          </FormControl>
          <FormLabel>Hobby1</FormLabel><br></br>
          <FormControlLabel label = "Listen to Music" control={<Controller
            name="music"
            control={control}
            rules={{required: "*Hobby1 is required"}}
            render={({field}) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              value="Listen to Music"
              />
            )}
          />}/>
          <FormControlLabel label = "Watch TV" control={<Controller
            name="tv"
            control={control}
            rules={{required: "*Hobby1 is required"}}
            render={({field}) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              value="Watch TV"
              />
            )}
          />}/>
          <FormControlLabel label = "Play Game" control={<Controller
            name="game"
            control={control}
            rules={{required: "*Hobby1 is required"}}
            render={({field}) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              value="Play Game"
              />
            )}
          />}/>
          <FormControlLabel label = "Others" control={<Controller
            name="others"
            control={control}
            rules={{required: "*Hobby1 is required"}}
            render={({field}) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              value="Others"
              />
            )}
          />}/>
          {/* <FormControlLabel label="Play game " control={<Checkbox {...register("Hobby1", {required: "*Hobby1 is required"})} value="Play game"/>} />
          <FormControlLabel label="Watch TV" control={<Checkbox {...register("Hobby1", {required: "*Hobby1 is required"})} value="Watch TV"/>} /> 
          <FormControlLabel label="Others" control={<Checkbox {...register("Hobby1", {required: "*Hobby1 is required"})} value="Others"/>} /> */}
          {errors.music?.message}<br/>
          <FormLabel>Gender</FormLabel><br></br>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel  control={<Radio checked={gender==="female"} {...register("Gender", {required: "*Gender is required"})} onChange={handleChange} value="female"/>} label="Female"/>
            <FormControlLabel  control={<Radio checked={gender==="male"} {...register("Gender", {required: "*Gender is required"})} onChange={handleChange} value="male"/>} label="Male" />
            <FormControlLabel  control={<Radio checked={gender==="others"} {...register("Gender", {required: "*Gender is required"})} onChange={handleChange} value="others"/>} label="Others" />
          </RadioGroup>
          {errors.Gender?.message}<br/>
          {status}

        <TextField fullWidth variant="standard" label="Email" {...register("Email", {required: "*Email is required"})} />{errors.Email?.message} <br/>
        <TextField fullWidth variant="standard" label="Phone Number" {...register("Phone", {required: "*Phone number is required"})} />{errors.Phone?.message} <br/>
        <TextField fullWidth type="password" variant="standard" label="Password" {...register("Password", {required: "*Password is required"})}/>{errors.Password?.message} <br/>
        <TextField fullWidth type="password" variant="standard" label="Confirm Password" {...register("Confirm", {required: "*Please confirm your password"})}/>{errors.Confirm?.message} <br/><br/>
        <Button type ="submit" fullWidth variant="contained" onClick={alerting}>Sign up</Button><br/><br/>
        <Button fullWidth variant="contained" onClick={resetForm}>Reset</Button>

        </form>
      </Paper>
    </Grid>
  )
}

export default SignupForm