import React, { useEffect, useState } from 'react'
import {
    Code, Mediaplayer, ResponsiveCard, CreativeDesign, VersatileDesign, CoopAi,
    IconGood, IconResponsiveDesing, IconCreativity, IconVersatile, IconIa, IconCode,
    IconGoodActive, IconResponsiveActive, IconCreativityActive, IconVersatileActive, IconIaActive 
} from '../components/index'
import { mediaplayerCode, responsiveDesign, creativeDesign, versatileDesign, coopAi } from './Segments/segments';

export default function TabOptions() {

    const initialTab = localStorage.getItem('tabActive') ? Number(localStorage.getItem('tabActive')) : 0
    const [ tabActive, setTabActive] = useState(initialTab)
    const [ tabContent, setTabContent] = useState( {})
    const [ viewCode, setViewCode] = useState(false)

    const reasons = [
        {title: 'Good practices',       icon: <IconGood/>,              iconActive: <IconGoodActive/>      , elemento: <Mediaplayer/>  ,code: mediaplayerCode},
        {title: 'Responsive desing',    icon: <IconResponsiveDesing/>,  iconActive: <IconResponsiveActive/>, elemento: <ResponsiveCard/>  ,code: responsiveDesign},
        {title: 'Creativity desing',    icon: <IconCreativity/>,        iconActive: <IconCreativityActive/>, elemento: <CreativeDesign/>  ,code: creativeDesign},
        {title: 'Versatile designer',   icon: <IconVersatile/>,         iconActive: <IconVersatileActive/> , elemento: <VersatileDesign/>  ,code: versatileDesign},
        {title: 'Colaboration with AI', icon: <IconIa/>,                iconActive: <IconIaActive/>        , elemento: <CoopAi/>  ,code: coopAi},

    ]
    const tabHandler = (i) => {
        setTabActive(i)
        setTabContent(reasons?.[i])
        localStorage.setItem('tabActive', i)
        console.log(reasons?.[i])
    }
    useEffect(()=>{
        setTabContent(reasons[tabActive])
    }, [tabActive]) 
    useEffect(()=>{
        setTabContent(reasons?.[initialTab])
    }, [])
    return (
        <div className='flex flex-col'>
            <div className='md:mt-20 mt-10 flex md:flex-row flex-col md:items-center items-start md:px-1 px-6 md:justify-center justify-between'>
                {reasons.map((reason, index) => (
                    <div key={index} onClick={()=> tabHandler(index)} className={`flex ease-in duration-200 md:mx-4 mx-1 md:my-1 my-2 flex-row justify-center items-center ${index === tabActive ? 'text-primary' : 'text-tertiary' }  text-lg font-light cursor-pointer`}>
                        {index === tabActive ? reason.iconActive : reason.icon}
                        <span className='ml-4 md:w-28 w-auto  leading-6'>{reason.title}</span>
                    </div>
                ))}
            </div>
            <div  className='md:hidden flex relative z-[90] '>
                <div onClick={()=> setViewCode(true)} className=' px-4 w-40 h-14 bg-primary text-tertiary flex flex-row justify-center items-center rounded-l-full absolute top-20 right-0' >
                    <IconCode/>
                    <span className='ml-2'>View code</span>
                </div>
            </div>
            <div className={`flex flex-col md:hidden ${viewCode? 'flex transition-opacity duration-500' : 'hidden transition-opacity duration-500'}  w-full h-[70vh] relative z-[100] top-20 bg-white `}>
                <div className='flex w-full h-full '>
                    <div className='w-[100%] h-[100%] bg-white p-6 rounded-xl  flex flex-col' >
                        <div className='flex flex-row mb-8'>
                            <div onClick={()=> setViewCode(false)} className='w-4 h-4 mx-1 bg-[#FF5F5A] rounded-full' ></div>
                            <div className='w-4 h-4 mx-1 bg-[#FFBE2E] rounded-full' ></div>
                            <div className='w-4 h-4 mx-1 bg-[#2ACA44] rounded-full' ></div>
                        </div>
                        {tabContent.code && <Code data={tabContent.code}/>}
                    </div>
                </div>
            </div>
            <div className='md:px-24 px-6 w-screen whiteboard h-[600px] md:mt-40 mt-10 md:mb-40 mb-10 relative flex md:flex-row flex-col justify-center items-center bottom-0'>
                <div className='md:w-1/2 w-full flex justify-start'>
                    {tabContent.elemento}
                </div>
                <div className='md:flex hidden w-1/2 h-[120%] '>
                    <div className='w-[100%] h-[100%] bg-white  p-6 rounded-xl border-slate-200 border flex flex-col' >
                        <div className='flex flex-row mb-8'>
                            <div className='w-4 h-4 mx-1 bg-[#FF5F5A] rounded-full' ></div>
                            <div className='w-4 h-4 mx-1 bg-[#FFBE2E] rounded-full' ></div>
                            <div className='w-4 h-4 mx-1 bg-[#2ACA44] rounded-full' ></div>
                        </div>
                        {tabContent.code && <Code data={tabContent.code}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
