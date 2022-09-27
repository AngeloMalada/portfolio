import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className='h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]'>Experience</h3>

    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[470px] sm:h-[720px]  '>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
    </div>
    </div>
    

  )
}