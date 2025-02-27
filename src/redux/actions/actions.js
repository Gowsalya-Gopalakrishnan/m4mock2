import NotesList from '@/components/features/NotesList'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const FIREBASE_URL = 'https://m4mock2-default-rtdb.firebaseio.com/notes.json'

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_LOADING = "SIGNIN_LOADING"
export const SIGNIN_ERROR = "SIGNIN_ERROR"


export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_LOADING = "FETCH_LOADING"
export const FETCH_ERROR = "FETCH_ERROR"

export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_LOADING = "DELETE_LOADING"
export const DELETE_ERROR = "DELETE_ERROR"

export const signin =(email,password,navigate)=>async(dispatch)=>{
    dispatch({type:SIGNIN_LOADING})
    try{
        const userCredentials = await GoogleAuthProvider(auth,email,password)
        const user = userCredentials.user
        dispatch({type:SIGNIN_SUCCESS,payload:user})
        navigate('/navList')    
    }
    catch(error){
        dispatch({type:SIGNIN_ERROR,payload:error})
    }
}

export const fetchData = ()=>async (dispatch)=>{
    dispatch({type:FETCH_LOADING})
    try{
        const res = await axios.get(FIREBASE_URL)
        const response = res.data
        const notes = response?Object.entries(response).map(([id,value])=>({
           id,...value,
           content:value.content??[] 
        })):[]
        dispatch({type:FETCH_SUCCESS,payload:notes})
    } 
    catch(error){
        dispatch({type:FETCH_ERROR,payload:error})
    }
}

export const deleteData = (id) =>async (dispatch)=>{
    dispatch({type:DELETE_LOADING})
    try{
        const res = await axios.delete(`https://m4mock2-default-rtdb.firebaseio.com/notes/${id}.json`)
        const data = res.data
        dispatch({type:DELETE_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:DELETE_ERROR,payload:error})
    }
}








