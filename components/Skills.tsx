import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]'>Skills</h3>

    <h3 className='absolute font-bold top-36 uppercase tracking-[3px] text-gray-500 text-sm indent-[3px] '>Hover over a skill</h3>
    <div className=' grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
    </div>
    </motion.div>
  )
}