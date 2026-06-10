import React, { useState } from 'react'

import BottomSheet from './BottomSheet';

import { FaPlus } from "react-icons/fa";


const InputBox = ({notes, setNotes, empty, setEmpty}) => {

    const [inputValue, setinputValue] = useState("");
    const[openSheet, setOpenSheet] = useState(false)


    function addNote() {

        if (inputValue.trim()) {

            setNotes([...notes, {id: Date.now(), text: inputValue, done: false}])
            setinputValue("")
            setEmpty(false)
            return true

        } else {
            setEmpty(true)
            return false
        }

    } 

    function handleSheet() {
        setOpenSheet(true)
    }


    return (
        <>
            <div className=' max-sm:hidden'>
        
                <div className="flex justify-center align-center gap-3 max-md:w-full">

                    <input  type="text" 
                            autoFocus
                            placeholder={empty === true ? "It's Empty" : "Write"}
                            className={` w-100 border border-gray-600 rounded-md px-3 py-1 outline-0 ${empty && "text-red-600 border-none bg-red-300 shadow-sm transition-all delay-75"}`} 
                            value={inputValue}
                            onChange={(e) => setinputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addNote()}
                            />

                    <button 
                            className="transition-all delay-50 text-lg px-3 py-1 rounded-md border border-blue-500 hover:cursor-pointer hover:bg-blue-500 hover:text-white"
                            onClick={addNote}>
                    
                    Add

                    </button>

                </div>

            </div>

            <div className="fixed bottom-5 p-4 bg-blue-500/90 rounded-full cursor-pointer sm:hidden z-50" onClick={handleSheet}>
                <FaPlus className="text-3xl text-white" />
            </div>

            <div>
                <BottomSheet inputValue={inputValue} setinputValue={setinputValue} addNote={addNote} empty={empty} openSheet={openSheet} setOpenSheet={setOpenSheet} />
            </div>
        </>
    )
}

export default InputBox