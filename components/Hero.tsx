import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import image from '../images/hero.png'
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text , count] = useTypewriter({
        words:["Student","Programer","<Kursadzija />"],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://lh3.googleusercontent.com/jSPtb5NoE4BWA4u2t9IWYYm441wDvMggcQ88MrlxBsP2K0hzis9YDrj-w2-Aww5o4GKn1i-Gse_kfkmoik34CE5-XG9WZBFoDue_u9KLi6xfLoyTI4IsyE2Mfi90MVRXWffwkn5-KpJFhtItIjDa8KO0eBlaN8AJ6svaKY1pCXSQmaPSNUkDwrBARX4x6I3UO1B9zIj3qOnfOmT3-_qOwC44vAHiR88AIDWbO2F_qvv0Uu-G2eJw7_kPl1z4ebAdTHnpvsYdyVGP1Ssq-FJAbh_tcL-W7y11Vtg3TwxWWJYlwdNW3nn-d2EyBBgApH7mq-6KlzBUrCrORZfDcnAUf7S-lgyQs2xAR46wt3bm7rnQeRi0GcHedxiKRzlSA1o3r-egUpIV_ZlUqY2G2WSxdM9cEpRJjdc3AvFjaqGVnJaBgLw1wOkJdxWbK9SOL28LSIWWyrZwtm_AZrkOWWCW2-tUD2HaipkXerhDZOH4Q7Z3ri-2vQ3TbxaNNjpp99StotrgBouL6Wd0wEvWIbfJBZ1Mdv5TYIRsIOQsnG4hyiZxUMLKA-jjYRsA7kg2Mm4g3UiajaskfJpr2IYcGMZS6qiGTjNd_01Fn4rDI7z9n6J03TZjdLg4fRSQmvEL3MARB32APKlUr1boaWmkav9JKOvVdNqlEBnkSHjqOjvPQEcAm-qiszkAFlIINNKp2K_H_hhj_AHXWrqldX63RYJYaGH1z6E5Z5uDk9awajFYYZ4fPRUyqRekYB7CFQq6rw=s972-no?authuser=0" alt="" />
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[0.1em] indent-[0.1em]'>Frontend developer</h2>
        <h1 className=' text-4xl md:text-4xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#8e2323'/>
        </h1>
        <div className='pt-5  flex flex-col sm:flex-row'>
            
           <Link href="#about">
            <button className='heroButton '>About</button>
            </Link>
           <Link href="#experience">
            <button className='heroButton '>Experience</button>
            </Link>
           <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
           <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link >
        </div>
        </div>
        
    </div>
  )
}