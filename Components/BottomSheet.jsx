import React from 'react'

const BottomSheet = ({inputValue, setinputValue, addNote, empty, openSheet, setOpenSheet}) => {
  return (
    <div className={`fixed inset-0 transition-all duration-300 ${openSheet ? "opacity-100" : "opacity-0 pointer-events-none"} flex justify-center items-end bg-black/50 z-50`} onClick={() => setOpenSheet(false)}>
        <div className={` sm:hidden bg-white w-full py-15 rounded-t-xl transition-all duration-300 ${openSheet ? "translate-y-0" : "translate-y-full"}`} onClick={(e) => e.stopPropagation()}>
    
            <div className=" px-4 flex flex-col justify-center align-center gap-3 max-md:w-full">

                <input  type="text" 
                        autoFocus
                        placeholder={empty === true ? "It's Empty" : "Write"}
                        className={` border border-gray-600 rounded-full px-3 py-2 outline-0 ${empty && "text-red-600 border-none bg-red-300 shadow-sm transition-all delay-75"}`} 
                        value={inputValue}
                        onChange={(e) => setinputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addNote()}
                        />

                <button 
                        className="transition-all delay-50 text-lg px-3 py-2 rounded-full border border-gray-500 hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500"
                        onClick={() => {if(addNote()) setOpenSheet(false)}}>
                
                Add

                </button>

            </div>
        
        </div>
    </div>
  )
}

export default BottomSheet