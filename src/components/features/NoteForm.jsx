import React from 'react'
// import { useNavigate,useDispatch,useSelector } from 'redux'
// import NotesList from './NotesList'
import {Box,Button} from '@chakra-ui/react'
import { signin } from '@/redux/actions/actions'
// import NotesList from './NotesList'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const NoteForm = () => {
    const dispatch = useDispatch('')
    const user = useSelector(state=>state.auth.user)

    const handleGoogleLogin=()=>{
        dispatch(signin())
        // Navigate('/navList')   
    }
  return (
    <Box>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </Box>
  )
}

export default NoteForm
