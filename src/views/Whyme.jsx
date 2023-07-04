import React from 'react'
import { TabOptions, Title } from '../components'

export default function Whyme() {

    return (
        <div id="why-me" className='w-screen h-auto flex flex-col bg-white justify-center items-center md:px-24 px-6 mt-28'>
            <Title type='title' textPrimary='Why' textSecondary='me?' where='other'/>
            <span className='font-light text-tertiary text-justify md:text-lg text-base mt-14'>As a Marketer, and UI/UX Designer, I have always focused on providing effective and appealing solutions that prioritize user needs. My approach to work centers on creating creative designs that enhance user interaction and experience. Below, you will find specific details about my methodologies and ways of working, which continually seek to marry functionality with aesthetics to achieve superior digital products.</span>
            <TabOptions/>
        </div>
    )
}
