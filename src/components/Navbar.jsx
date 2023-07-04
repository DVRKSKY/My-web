import React, { useState } from 'react'

export default function () {
    const [openNav, setOpenNav] = useState(false)
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleToggle = () => {
        setOpenNav(!openNav);
    }
  return (
    <div className='w-screen md:px-24 px-6 md:pt-12 pt-6 md:pb-12 flex bg-secondary flex-row md:justify-around justify-start items-center absolute top-0 z-[110]'>
        <div className='md:flex hidden w-full'>
            <span className='w-[30%] text-3xl text-tertiary'>Insomnio</span>
            <div className='w-[70%] flex flex-row justify-end'>
                <span 
                    className='text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                    onClick={() => scrollTo('why-me')}
                >
                    Why me
                </span>
                <span 
                    className='text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                    onClick={() => scrollTo('skills')}
                >
                    Skills
                </span>
                <span 
                    className='text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                    onClick={() => scrollTo('projects')}
                >
                    Proyects
                </span>
                <span 
                    className='text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                    onClick={() => scrollTo('contact')}
                >
                    Contact
                </span>
            </div>
        </div>
        <div className='md:hidden flex justify-start flex-col'  >
            <div className='bg-secondary hover:border-primary focus:outline-none active:outline-none text-tertiary' onClick={handleToggle}>
                {/* Icono de hamburguesa (tendrás que reemplazar esto con tu ícono real) */}
                <div className={openNav ? 'hidden' : ''}>☰</div>

                {/* Menú desplegable */}
                <div className={openNav ? 'w-screen h-screen fixed top-0 right-0 bg-white flex flex-col justify-center items-center' : 'hidden'}>
                    <div className='text-primary mb-32'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </div>
                    <span 
                        className='my-2 text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                        onClick={() => scrollTo('why-me')}
                    >
                        Why me
                    </span>
                    <span 
                        className='my-2 text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                        onClick={() => scrollTo('skills')}
                    >
                        Skills
                    </span>
                    <span 
                        className='my-2 text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                        onClick={() => scrollTo('projects')}
                    >
                        Proyects
                    </span>
                    <span 
                        className='my-2 text-tertiary mx-10 text-lg font-light cursor-pointer hover:font-bold ease-in-out duration-300' 
                        onClick={() => scrollTo('contact')}
                    >
                        Contact
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
