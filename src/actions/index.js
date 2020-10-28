import axios from "axios"
import { GET_TASKS,ADD_TASK } from '../constants'
import BASEURL from '../common/BaseUrl'



export const getTasks = () => {
    return (dispatch) => {
        return axios.get(`${BASEURL}`)
        .then(response => {
            dispatch({
                type: GET_TASKS,
                payload: response.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const addTask = (newTask) => {
   // console.log(newTask)
    return (dispatch) => {
        return axios.post(`${BASEURL}`,newTask)
        .then(getTasks())
        .then(response => {
            dispatch({
                type: ADD_TASK,
                payload: response.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

