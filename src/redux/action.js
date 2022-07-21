export const signUpData = () =>{
  return{
    type: 'signup'
  }
}

export const todoAction = (data) =>{
  return{
    type: 'addTodo',
    payload: data;
  }
}