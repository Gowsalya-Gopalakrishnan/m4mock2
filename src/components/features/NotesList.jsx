import React from 'react'
import {Box,Button,Heading, HStack, VStack} from '@chakra-ui/react'
import { useDispatch ,useSelector} from 'react-redux'

const NotesList = () => {

    const dispatch = useDispatch('')
    const notes = useSelector(state=>state.notes.notes)
    const loading = useSelector(state=>state.notes.loading)
    const error = useSelector(state=>state.notes.error)

  return (
    <Box>
       <Heading>Book Store</Heading>
       {loading && <p>Loading....</p>}
       {error && <p>{error}</p>}
       {notes.length > 0 && notes.map((note)=>{
        return(
            <VStack>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p>{note.timeStamp}</p>
                <HStack>
                    <Button >Edit</Button>
                    <Button >Delete</Button>
                </HStack>
            </VStack>

        )
       })}
    </Box>
  )
}

export default NotesList
