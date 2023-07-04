import React from 'react'
import { Title, Buttons, IconDownload, IconMail, Carrousel } from '../components'
import { activeEmail } from '../redux/actions'
import { useDispatch } from 'react-redux'
export default function Proyects() {

    const dispatch = useDispatch()
    const openEmail = (value) => {
        dispatch(activeEmail(value))
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
    return (
        <div id="projects" className='w-screen h-auto  flex flex-col bg-white justify-center items-center md:px-24 px-6 mt-4'>
            <div className='flex justify-content items-center flex-col mt-32'>
                <Title type='title' textPrimary='My' textSecondary='works' where='other'/>
                <span className='md:px-60 font-light text-tertiary md:text-center text-justify md:text-lg text-base mt-14'>Welcome to my projects, where I seek to capture my passion for innovation and turn ideas into realities. Through a combination of skills in design, marketing and programming, I have developed a number of projects that address various challenges. Each project represents a constant effort to explore new ideas. Join me on this journey as we work together to create meaningful experiences and make a difference in the world.</span>
                <div className=' mt-10 flex w-full md:flex-row flex-col justify-center items-center'>
                    <Buttons text="Contact" type="secondary" icon={<IconMail/>} action={()=>openEmail(true)} />
                    <Buttons text="Download Cv" type="primary" action={() => openInNewTab('https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FENG%20-%20CV%20-%20Amadeo%20Flores%20-%20Developer.docx.pdf?alt=media&token=6971f686-d38d-4251-8464-5b3f4f9c7957')} icon={<IconDownload/> }/>
                </div>
            </div>
            <Carrousel/>
        </div>
    )
}
