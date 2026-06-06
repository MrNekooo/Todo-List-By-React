import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'

const Footer = () => {

  const [close, setClose] = useState(false)

  return (
    <div className={`flex items-center justify-center font-main fixed bottom-5 border px-20 py-3 rounded-full bg-linear-to-r from-violet-800 to-fuchsia-600 text-white shadow-lg shadow-purple-500 mx-2 transition-all duration-400 ${close && " opacity-0 invisible"}`}>
      <button className=' absolute right-2 border rounded-full p-2 cursor-pointer' onClick={() => setClose(!close)}><CgClose/></button>
      <p className='max-[400px]:text-sm text-center sm:w-45'>Written Code By Nekooo</p>
    </div>
  )
}

export default Footer