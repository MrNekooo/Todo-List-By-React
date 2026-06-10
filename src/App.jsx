import { useEffect, useState } from "react"

import InputBox from "../Components/InputBox";
import Notes from "../Components/Notes";


import { CgDarkMode } from "react-icons/cg";



function App() {

  // useStates
  const [notes, setNotes] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [deleteIds, setDeleteIds] = useState(new Set());


  // useEffects
  useEffect(() => {

    const saved = localStorage.getItem('notes');

    if (saved) setNotes(JSON.parse(saved))

  },[])

  useEffect(() => {

    if (notes.length > 0 ) localStorage.setItem('notes', JSON.stringify(notes))

  },[notes])

  // functions

  function doneNote(id) {

    setNotes(notes.map(note => (
      note.id === id ? {...note, done: !note.done} : note
    )))

  }

  function deleteNote(id) {

    setDeleteIds(prev => new Set([...prev, id]))
    setTimeout(() => setNotes(prev => prev.filter(n => n.id !== id)), 500)

  }

  // Main Code
  return (
    <div className="font-main flex flex-col items-center gap-10 py-5 px-3 relative">

      <div className="flex items-center gap-10">

        <h1 className="text-5xl max-sm:text-4xl">To Do List</h1>
        {/* -----------------------------------On Working------------------------------------ */}
        <CgDarkMode className=" max-md:absolute right-5 text-2xl cursor-pointer hover:rotate-180 transition-all delay-75" onClick={() => setDarkMode(!darkMode)}/>

      </div>


      <InputBox notes={notes} setNotes={setNotes} empty={empty} setEmpty={setEmpty} />
      <Notes notes={notes} doneNote={doneNote} deleteNote={deleteNote} deleteIds={deleteIds} />

      

    </div>
  )
}

export default App
