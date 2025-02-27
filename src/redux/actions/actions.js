import NotesList from '@/components/features/NotesList'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_LOADING = "SIGNIN_LOADING"
export const SIGNIN_ERROR = "SIGNIN_ERROR"

export const signin =(email,password,navigate)=>async(dispatch)=>{
    dispatch({type:SIGNIN_LOADING})
    try{
        const userCredentials = await GoogleAuthProvider(auth,email,password)
        const user = userCredentials.user
        dispatch({type:SIGNIN_SUCCESS,payload:user})
        Navigate('/navList')
    }
    catch(error){
        dispatch({type:SIGNIN_ERROR,payload:error})
    }
}










