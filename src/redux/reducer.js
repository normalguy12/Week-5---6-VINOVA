const init={
        user: {
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
        }
}
/*
  action:
  {
    type:
    payload
  }
*/
const rootReducer = (state = init, action) =>{
  switch(action.type){
    case "signup":
      return {
        ...state,
        user: {
          ...state.user,
        }
      }
    default:
      return state;
  }
}

export default rootReducer