import React, { useEffect } from 'react'
import { useState } from 'react';
import {Grid, Paper, CircularProgress} from '@mui/material';
import axios from "axios"
import { useDispatch } from 'react-redux';


function Todo() {

  const [todo, setTodo] = useState("")

  useEffect(()=>{
    axios.get(`https://api-todo-vinova.herokuapp.com/todos`).then((res)=>{
      const response = res.data;
      setTodo(response)
    })

  }, [])

  console.log(todo)
  
  const dispatch = useDispatch();

  const paperStyle ={padding: "30px 20px", width: 500, margin: "20px auto", fontWeight: "600", lineWeight: "10px"}

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          Todo
        </Grid><br/>
        {todo ? (<div>
          {todo.map((todos)=>{
            const {text}= todos;
            return(<div>
              <h1>{text}</h1>
            </div>)
          })}
        </div>) : <CircularProgress/>}
      </Paper>
    </Grid>
  )
}

export default Todo