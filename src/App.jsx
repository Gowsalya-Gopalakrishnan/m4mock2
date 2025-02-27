import React from 'react'
import NoteForm from './components/features/NoteForm'
import NotesList from './components/features/NotesList'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NoteForm/>
      <Routes>
        <Route path='/navList' element={<NotesList/>}/>
      </Routes>
    </div>
  )
}

export default App
