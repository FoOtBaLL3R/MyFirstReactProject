import { useState } from 'react'
import { Button, Input, Textarea } from '@chakra-ui/react'
import './App.css'
import CreateNoteForm from './components/CreateNoteForm'

function App() {

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm />
      </div>
    </section>
  )
}

export default App
