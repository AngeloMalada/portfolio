import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionleft?:boolean;
}

export default function Skill({directionleft}: Props) {
    return (<div className='group relative flex cursor-pointer'>

    <motion.img 
    initial={{
        x:directionleft ? -200:200,
        opacity:0
    }}
    transition={{
        duration:1
    }}
    whileInView={{
        opacity:1,
        x:0
    }}
    src="https://camo.githubusercontent.com/3f51c9e4df2ed06b09943fce5082aa1b87de388710df73a072ed260a1fbfcf36/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f747970657363726970742e737667" className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out' alt="" />

    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-20 md:h-28 xl:w-32 xl:h-32  rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bolt text-black opacity-100'>
                100%
            </p>
        </div>
    </div>
    </div>
    )
}