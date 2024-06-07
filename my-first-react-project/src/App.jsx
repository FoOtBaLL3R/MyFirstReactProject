import { Select, Input } from '@chakra-ui/react'
import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { fetchNotes } from './services/note'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let notesAll = await fetchNotes();
      // console.log(notesAll);
      setNotes(notesAll);
    }

    fetchData();

  }, [])

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm />
        <Filters />
        
      </div>
      <ul className='flex flex-col gap-5 w-1/2'>
        {notes.map((n) => (
          <li key={n.id}>
            <Note title={n.name} description={n.description} createdAt={n.createAt}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App

