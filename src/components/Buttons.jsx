import React from 'react'

export default function Buttons({text, type, icon, action}) {
  return (
    <button onClick={action} className={`md:w-[250px] w-full my-2 hover:border-primary focus:outline-none flex flex-row justify-center items-center mx-4 h-[50px] ${type === "primary" ? 'bg-primary text-white border-none' : 'bg-[transparent] text-primary border-2 border-primary' }`}>
        <span className='mr-2'>{text}</span> 
        {icon}
    </button>
  )
}
