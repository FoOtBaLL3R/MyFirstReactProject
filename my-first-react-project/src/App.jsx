import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { createNote, fetchNotes } from './services/note'
import Pagination from './components/Pagination'

function App() {
  let showPage;
  const [page, setPage] = useState(1);
  const [pageQty, setpageQty] = useState(0);
  
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let notesAll = await fetchNotes(filter, page);
      // console.log(notesAll);//totalPages
      setNotes(notesAll.notes);
      setpageQty(notesAll.totalPages);
    }

    fetchData();

  }, [filter, page]);
  const onCreate = async (note) => {
    await createNote(note);
    let notesAll = await fetchNotes(filter);
    setNotes(notesAll.notes);
    setpageQty(notesAll.totalPages);
  }

  const paginate = pageNum => setPage(pageNum);

  if(pageQty > 1){
    showPage = (
      <Pagination pages={pageQty} page={page} paginate={paginate}/>
    );

  }

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter}/>
        
      </div>
      <ul className='flex flex-col gap-5 w-1/2'>
        {notes.map((n) => (
          <li key={n.id}>
            <Note title={n.name} description={n.description} createdAt={n.createAt}/>
          </li>
        ))}
        {showPage}
      </ul>
    </section>
  )
}

export default App

