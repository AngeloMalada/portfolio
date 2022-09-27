import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionleft?:boolean;
}

export default function Skill({directionleft}: Props) {
    return (<div className='group relative flex cursor-pointer'>

    <motion.img 
    initial={{
        x:directionleft ? -100:100,
        opacity:0
    }}
    transition={{
        duration:1
    }}
    whileInView={{
        opacity:1,
        x:0
    }}
    src="https://miro.medium.com/max/256/1*iA-WRbWcbYd3BFAzzFypWg.png" className='rounded-full border border-gray-500 object-fit  h-12 w-12 sm:h-24 sm:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale duration-300 ease-in-out ' alt="" />

    <motion.div
    initial={{
        x:directionleft ? -100:100,
    
    }}
    transition={{
        duration:1
    }}
    whileInView={{
        x:0
    }}

    className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 sm:h-24 sm:w-24 xl:w-28 xl:h-28  rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-sm sm:text-3xl font-bolt text-black opacity-100'>
                100%
            </p>
        </div>
    </motion.div>
    </div>
    )
}