import { GET_TASKS } from '../constants'



const initState = {
    tasks: []
}

export default function taskReducer(state=initState,action){
  switch (action.type){
      case GET_TASKS:
          return{
              ...state,
              tasks: action.payload
          }
      default:
          return{
              ...state
          }
  }
}