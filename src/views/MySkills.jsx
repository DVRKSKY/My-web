import React, { useEffect, useRef } from 'react'
import { Title, Buttons, IconDownload, IconMail } from '../components'
import Skills from '../assets/Skills.png'
import { activeEmail } from '../redux/actions'
import { useDispatch } from 'react-redux'
import Vivus from 'vivus'

export default function MySkills() {
    const dispatch = useDispatch()
    const svg = useRef(null)
    useEffect(()=>{
        new Vivus(svg.current, {duration: 200})
    }, [])
    const openEmail = (value) => {
        dispatch(activeEmail(value))
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      

    return (
     <div  id="skills" className='w-screen h-auto  flex md:flex-row flex-col bg-white justify-center items-center md:px-24 px-6 mt-4'>
            <div className='md:w-1/2 md:mb-1 mb-10 w-100 h-auto flex justify-center items-center relative'>
                <svg ref={svg} width="400px" height="498" viewBox="0 0 444 498" opacity=".2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M207.1 2.43596C207.1 2.43596 190.266 46.4452 168.621 75.5297C149.593 101.099 125.96 117.333 111.469 133.273C84.6887 162.73 47.3532 176.467 13.3584 212.342C-1.56464 228.09 13.6694 267.933 30.8214 262.539C82.8652 246.172 116.034 200.435 161.636 170.675C179.618 158.939 195.779 146.28 211.802 131.96C226.779 118.577 195.318 165.055 194.974 165.425C163.281 199.539 116.087 241.358 75.2729 263.851C55.9504 274.5 19.2187 186.309 19.6469 138.522C20.0752 90.7355 60.7082 50.798 92.101 111.291C110.059 145.895 124.08 182.452 142.903 216.607C151.841 232.826 168.437 274.181 184.497 284.849C185.802 285.716 197.082 252.412 197.197 252.04C205.681 224.61 207.53 198.282 197.832 170.675C183.091 128.708 131.758 86.2754 91.1484 125.071C72.706 142.689 -4.17521 283.663 30.8214 306.502C79.0967 338.007 152.77 362.233 208.627 346.201C270.838 328.344 310.08 272.537 353.73 227.433C354.653 226.479 387.936 196.464 373.098 205.452C335.314 228.339 292.667 241.842 249.904 250.728C223.484 256.217 152.038 279.409 124.487 262.539C95.3263 244.683 32.6115 161.355 54.9522 123.43C132.548 -8.29374 202.874 301.535 214.025 338.983C231.487 397.624 263.478 314.59 281.655 290.098C318.567 240.362 393.78 158.207 365.547 111.291C347.308 80.9821 262.788 87.7085 249.904 93.9442C184.224 125.73 142.461 214.775 89.8784 263.851C80.4632 272.638 78.1659 262.928 75.9079 252.04C63.6274 192.822 67.3166 126.999 89.8784 70.9365C100.109 45.5139 105.602 18.0913 131.168 4.88239C168.141 -14.2196 191.545 67.2231 193.387 84.7161C202.899 175.07 177.238 233.265 141.315 311.095C125.081 346.268 98.9569 309.734 75.9079 292.723C54.5685 276.972 27.6902 272.161 25.7413 311.095C23.8705 348.467 86.197 336.376 107.659 334.718C215.141 326.414 301.574 278.218 395.006 228.09C436.391 205.885 438.86 214.905 441.68 265.163C446.243 346.49 411.69 423.686 333.409 454.797C308.526 464.686 292.842 428.376 284.512 411.162C243.601 326.614 227.718 232.313 225.773 138.522C225.6 130.168 225.872 -5.42764 243.29 2.43593C298.614 54.2845 276.725 190.284 270.859 256.961C267.723 292.612 256.454 347.15 220.058 364.245C176.164 384.861 200.048 318.989 205.452 302.237C222.5 249.39 246.166 199.982 272.129 151.318C276.541 143.048 304.032 102.355 272.764 118.509C171.712 170.718 99.9974 272.354 40.9818 368.182C36.5645 375.355 20.646 391.445 39.0767 386.555C83.1822 374.854 125.424 353.872 164.493 330.124C195.337 311.377 226.853 290.905 252.761 265.163C256.833 261.118 295.265 215.308 293.72 223.825C280.244 298.092 223.891 371.69 190.847 438.393C178.565 463.185 135.614 470.703 112.422 454.469C84.6796 435.05 64.7879 402.465 46.3794 374.416C39.0484 363.246 -6.23604 303.212 3.31762 286.161C6.35097 280.747 100.456 357.474 111.469 365.886C140.235 387.855 166.813 413.193 197.197 432.815C208.707 440.249 288.544 353.307 303.245 343.248C336.827 320.271 350.994 308.806 341.982 361.293C336.651 392.339 325.7 420.863 314.993 450.204C310.151 463.473 310.671 462.671 307.219 475.968C305.489 482.629 302.068 496.415 293.015 496.415C280.84 496.415 284.512 451.675 284.512 435.247C284.512 395.809 282.925 354.387 282.925 315.032C282.925 291.25 269.369 192.315 306.421 249.743C340.656 302.808 350.14 370.106 312.771 425.269C295.774 450.359 309.403 364.032 312.771 356.699C325.766 328.403 341.003 290.79 359.127 265.82C383.372 232.417 286.012 302.872 254.349 328.812C237.744 342.416 178.624 408.836 156.873 379.337C130.384 343.412 125.219 330.238 131.155 280.911C141.329 196.367 185.982 73.8998 266.414 34.1909C293.93 20.6065 314.171 34.415 319.438 64.0467C335.772 155.937 271.386 210.65 241.013 288.129C232.991 308.593 238.515 293.428 243.553 286.161C266.482 253.091 307.012 232.341 340.077 212.342C360.911 199.739 394.85 171.855 420.407 171.003C442.641 170.262 419.82 226.802 417.867 232.027C389.196 308.705 335.471 405.711 258.159 439.705C217.178 457.725 225.902 491.872 236.824 496.415" stroke="#00FFFF" strokeWidth="2.49788" strokeLinecap="round"/>
                </svg>
                <img className='md:w-auto  w-[350px] absolute md:bottom-0 bottom-0' src={Skills} alt="stack de habilidades" />
            </div>
            <div className='md:w-1/2 w-100 h-auto bg-white flex flex-col justify-start items-center'>
                <Title type='title' textPrimary='My' textSecondary='skills' where='other'/>
                <span className='font-light text-tertiary text-justify md:text-lg text-base mt-14'>Combine my skills in design, marketing and programming to create impactful and functional solutions. My passion for innovation drives me to turn ideas into reality. I present my stack of tools, who have helped me to carry out projects and gain experience. </span>
                <div className=' mt-10 flex w-full md:flex-row flex-col justify-center items-center'>
                    <Buttons text="Contact" type="secondary" icon={<IconMail/>} action={()=>openEmail(true)}/>
                    <Buttons text="Download Cv" type="primary" action={() => openInNewTab('https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FENG%20-%20CV%20-%20Amadeo%20Flores%20-%20Developer.docx.pdf?alt=media&token=6971f686-d38d-4251-8464-5b3f4f9c7957')} icon={<IconDownload/> }/>


                </div>
            </div>
        </div>
    )
}
