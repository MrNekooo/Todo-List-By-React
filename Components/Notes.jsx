import React from 'react'

import { BiTrash } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";



const Notes = ({notes, doneNote, deleteNote, deleteIds}) => {
  return (
    <div>
    
        <div>
            {notes.map((note) => {
    
                const isRTL = /[\u0600-\u06FF]/.test(note.text);
    
                return (
                <div    key={note.id} 
                        className={`bg-white my-3 p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-101 transition-all duration-500 ring-3 flex justify-between items-center gap-40 max-[500px]:gap-10 max-w-200 wrap-anywhere ${note.done ? "bg-green-50 text-gray-500 ring-green-500" : "bg-white ring-blue-500"} ${deleteIds.has(note.id) && "opacity-0"}`}>
                
                    <div className={`max-md:text-md md:text-xl text-wrap ${isRTL ? "font-rtl" : "font-main"} `}>
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
                <p>. . .</p>
            )}
        
        </div>
    
    </div>
  )
}

export default Notes