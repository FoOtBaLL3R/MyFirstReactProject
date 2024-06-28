import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

export default function CreateNoteForm({onCreate}) {
  const [note, setNote] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setNote(null);
    onCreate(note);
  };


  return (
        <form onSubmit={onSubmit} className='w-full flex flex-col gap-3'>
          <h3 className='font-bold text-xl'>Create a note</h3>
          
          <Input placeholder='Name of the note' 
          type="text" 
          onChange={(e) => setNote({...note, name: e.target.value})}
          value={note?.name ?? ""}
          />

          <Textarea 
          placeholder='Description of note' 
          onChange={(e) => setNote({...note, description: e.target.value})}
          value={note?.description ?? ""}
          />

          <Button colorScheme='teal' type='submit'>Create</Button>
        </form>
  )
  }