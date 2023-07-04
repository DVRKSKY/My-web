import React from 'react'

export default function CardProyects({title, text, url}) {

  return (
    <div className='md:w-[30%] w-full h-[440px] ma-auto m-5 rounded-lg justify-center flex flex-col items-center border-tertiary-100 border hover:shadow-lg'>
        <div className='h-[50%] w-[100%] bg-black rounded-t-lg'>
        </div>
        <div className='w-full h-[50%] flex flex-col justify-center items-start md:px-6 px-4 '>
            <h3 className='text-tertiary text-xl my-0'>{title}</h3>
            <a href={`http://${url}`} target="_blank" className='my-2 text-primary cursor-pointer'>Visit proyect</a>
            <span className='text-justify text-tertiary font-light'>{text}</span>
        </div>
    </div>
  )
}
