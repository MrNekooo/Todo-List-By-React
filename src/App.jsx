import { useEffect, useState } from "react"
import { BiTrash } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { CgDarkMode } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";


function App() {

  // useStates
  const [inputValue, setinputValue] = useState("");
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
  function addNote() {
    if (inputValue.trim()) {

      setNotes([...notes, {id: Date.now(), text: inputValue, done: false}])
      setinputValue("")
      setEmpty(false)

    } else {
      setEmpty(true)
    }
  }

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
    <div className="font-main flex flex-col items-center gap-10 py-5">

      <div className="flex items-center gap-10">

        <h1 className="text-5xl max-sm:text-4xl">لیست انجام ها</h1>
        {/* -----------------------------------On Working------------------------------------ */}
        <CgDarkMode className="text-2xl cursor-pointer hover:rotate-180 transition-all delay-75" onClick={() => setDarkMode(!darkMode)}/>

      </div>

      <div className="flex justify-center align-center gap-3">

        <input  type="text" 
                autoFocus
                placeholder={empty === true ? "خالیه" : "بنواز"}
                className={`border border-gray-600 rounded-md px-3 py-1 outline-0 ${empty && "text-red-600 border-none bg-red-300 shadow-sm transition-all delay-75"}`} 
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNote()}
                />

        <button 
          className="transition-all delay-50 text-lg px-3 py-1 rounded-md border-gray-600 border hover:cursor-pointer hover:bg-black hover:text-white max-[350px]:text-sm"
          onClick={addNote}>
          
          اضاف کن

        </button>

      </div>

      <div>
        {notes.map((note) => {

          return (
            <div  key={note.id} 
                  className={`bg-white my-3 p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-101 transition-all duration-500 border-x-4 flex justify-between items-center gap-40 max-[500px]:gap-10 max-w-200 wrap-anywhere ${note.done ? "bg-green-50 text-gray-500 border-green-500" : "bg-white border-blue-500"} ${deleteIds.has(note.id) && "opacity-0"}`}>
          
              <div className=" max-md:text-md md:text-xl text-wrap">
                {note.text}
              </div>
              <div className="flex justify-center items-center gap-1">
                <button onClick={() => doneNote(note.id)} className={`hover:text-white transition-all duration-100 hover:cursor-pointer p-2 rounded-full ${note.done ? "hover:bg-red-500" : "hover:bg-green-500"}`}> {note.done ? <CgClose/> : <MdDone/>} </button>
                <button onClick={() => deleteNote(note.id)} className="hover:bg-red-500 hover:text-white transition-all delay-75 hover:cursor-pointer p-2 rounded-full"><BiTrash/></button>
                {/* <button className="hover:text-white hover:bg-sky-500 transition-all delay-75 hover:cursor-pointer p-2 rounded-full"><BsThreeDots/></button> */}
              </div>

            </div>
          )

        })}

        {notes.length === 0 && (
          <p>کاری نی</p>
        )}

      </div>

    </div>
  )
}

export default App
