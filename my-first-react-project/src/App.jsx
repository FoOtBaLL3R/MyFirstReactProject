import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { createNote, fetchNotes, deleteNote, updateNote } from './services/note'
import Pagination from './components/Pagination'
import UpdateNoteForm from './components/UpdateNoteForm'

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valNote, setValNote] = useState(null);

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
  };

  const deleteNt = async (noteI) => {
    // console.log(noteI);
    await deleteNote(noteI);
    let notesAll = await fetchNotes(filter);
    setNotes(notesAll.notes);
    setpageQty(notesAll.totalPages);
  };

  const openUpdateForm = (noteDatas) => {
    // const noteData = {
    //   id: idNOte,
    //   name: title,
    //   description: desc,
    // };
    console.log(noteDatas);
    setIsModalOpen(true);
    setValNote(noteDatas);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleUpdateNote = async (n) => {
    
  };

  // const handlePageChange = pageNum1 => setPage(pageNum1);
  const handlePageChange = (currentPage) => {
    setPage(currentPage);
  };

  if(pageQty > 1){
    showPage = (
      <Pagination pages={pageQty} page={page} paginate={handlePageChange}/>
    );
    

  }
  

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter}/>
        
      </div>
      <ul className='flex flex-col gap-5 w-1/2'>
        <UpdateNoteForm 
          isOpen={isModalOpen}
          onClose={handleCloseModal} 
          noteValue={valNote} 
          noteUpdate={handleUpdateNote} 
        />
        <Note 
          myNotes={notes} 
          noteDelete={deleteNt} 
          noteEdt={openUpdateForm}
        />            
        {showPage}
      </ul>
    </section>
  )
}

export default App

