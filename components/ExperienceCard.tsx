import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y:-100,
                    opacity:0
                }}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:1.2
                }}
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover' 
            src="https://lh3.googleusercontent.com/jSPtb5NoE4BWA4u2t9IWYYm441wDvMggcQ88MrlxBsP2K0hzis9YDrj-w2-Aww5o4GKn1i-Gse_kfkmoik34CE5-XG9WZBFoDue_u9KLi6xfLoyTI4IsyE2Mfi90MVRXWffwkn5-KpJFhtItIjDa8KO0eBlaN8AJ6svaKY1pCXSQmaPSNUkDwrBARX4x6I3UO1B9zIj3qOnfOmT3-_qOwC44vAHiR88AIDWbO2F_qvv0Uu-G2eJw7_kPl1z4ebAdTHnpvsYdyVGP1Ssq-FJAbh_tcL-W7y11Vtg3TwxWWJYlwdNW3nn-d2EyBBgApH7mq-6KlzBUrCrORZfDcnAUf7S-lgyQs2xAR46wt3bm7rnQeRi0GcHedxiKRzlSA1o3r-egUpIV_ZlUqY2G2WSxdM9cEpRJjdc3AvFjaqGVnJaBgLw1wOkJdxWbK9SOL28LSIWWyrZwtm_AZrkOWWCW2-tUD2HaipkXerhDZOH4Q7Z3ri-2vQ3TbxaNNjpp99StotrgBouL6Wd0wEvWIbfJBZ1Mdv5TYIRsIOQsnG4hyiZxUMLKA-jjYRsA7kg2Mm4g3UiajaskfJpr2IYcGMZS6qiGTjNd_01Fn4rDI7z9n6J03TZjdLg4fRSQmvEL3MARB32APKlUr1boaWmkav9JKOvVdNqlEBnkSHjqOjvPQEcAm-qiszkAFlIINNKp2K_H_hhj_AHXWrqldX63RYJYaGH1z6E5Z5uDk9awajFYYZ4fPRUyqRekYB7CFQq6rw=s972-no?authuser=0" alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Programmer at GOOGLE</h4>
                <p className='font-bold text-2xl mt-1'>Sokre</p>
                <div className='flex space-x-2 my-2' >
                   <img className='h-10 w-10 rounded-full' src="https://lh3.googleusercontent.com/jSPtb5NoE4BWA4u2t9IWYYm441wDvMggcQ88MrlxBsP2K0hzis9YDrj-w2-Aww5o4GKn1i-Gse_kfkmoik34CE5-XG9WZBFoDue_u9KLi6xfLoyTI4IsyE2Mfi90MVRXWffwkn5-KpJFhtItIjDa8KO0eBlaN8AJ6svaKY1pCXSQmaPSNUkDwrBARX4x6I3UO1B9zIj3qOnfOmT3-_qOwC44vAHiR88AIDWbO2F_qvv0Uu-G2eJw7_kPl1z4ebAdTHnpvsYdyVGP1Ssq-FJAbh_tcL-W7y11Vtg3TwxWWJYlwdNW3nn-d2EyBBgApH7mq-6KlzBUrCrORZfDcnAUf7S-lgyQs2xAR46wt3bm7rnQeRi0GcHedxiKRzlSA1o3r-egUpIV_ZlUqY2G2WSxdM9cEpRJjdc3AvFjaqGVnJaBgLw1wOkJdxWbK9SOL28LSIWWyrZwtm_AZrkOWWCW2-tUD2HaipkXerhDZOH4Q7Z3ri-2vQ3TbxaNNjpp99StotrgBouL6Wd0wEvWIbfJBZ1Mdv5TYIRsIOQsnG4hyiZxUMLKA-jjYRsA7kg2Mm4g3UiajaskfJpr2IYcGMZS6qiGTjNd_01Fn4rDI7z9n6J03TZjdLg4fRSQmvEL3MARB32APKlUr1boaWmkav9JKOvVdNqlEBnkSHjqOjvPQEcAm-qiszkAFlIINNKp2K_H_hhj_AHXWrqldX63RYJYaGH1z6E5Z5uDk9awajFYYZ4fPRUyqRekYB7CFQq6rw=s972-no?authuser=0" alt="" />

                   <img className='h-10 w-10 rounded-full' src="https://lh3.googleusercontent.com/jSPtb5NoE4BWA4u2t9IWYYm441wDvMggcQ88MrlxBsP2K0hzis9YDrj-w2-Aww5o4GKn1i-Gse_kfkmoik34CE5-XG9WZBFoDue_u9KLi6xfLoyTI4IsyE2Mfi90MVRXWffwkn5-KpJFhtItIjDa8KO0eBlaN8AJ6svaKY1pCXSQmaPSNUkDwrBARX4x6I3UO1B9zIj3qOnfOmT3-_qOwC44vAHiR88AIDWbO2F_qvv0Uu-G2eJw7_kPl1z4ebAdTHnpvsYdyVGP1Ssq-FJAbh_tcL-W7y11Vtg3TwxWWJYlwdNW3nn-d2EyBBgApH7mq-6KlzBUrCrORZfDcnAUf7S-lgyQs2xAR46wt3bm7rnQeRi0GcHedxiKRzlSA1o3r-egUpIV_ZlUqY2G2WSxdM9cEpRJjdc3AvFjaqGVnJaBgLw1wOkJdxWbK9SOL28LSIWWyrZwtm_AZrkOWWCW2-tUD2HaipkXerhDZOH4Q7Z3ri-2vQ3TbxaNNjpp99StotrgBouL6Wd0wEvWIbfJBZ1Mdv5TYIRsIOQsnG4hyiZxUMLKA-jjYRsA7kg2Mm4g3UiajaskfJpr2IYcGMZS6qiGTjNd_01Fn4rDI7z9n6J03TZjdLg4fRSQmvEL3MARB32APKlUr1boaWmkav9JKOvVdNqlEBnkSHjqOjvPQEcAm-qiszkAFlIINNKp2K_H_hhj_AHXWrqldX63RYJYaGH1z6E5Z5uDk9awajFYYZ4fPRUyqRekYB7CFQq6rw=s972-no?authuser=0" alt="" />

                   <img className='h-10 w-10 rounded-full' src="https://lh3.googleusercontent.com/jSPtb5NoE4BWA4u2t9IWYYm441wDvMggcQ88MrlxBsP2K0hzis9YDrj-w2-Aww5o4GKn1i-Gse_kfkmoik34CE5-XG9WZBFoDue_u9KLi6xfLoyTI4IsyE2Mfi90MVRXWffwkn5-KpJFhtItIjDa8KO0eBlaN8AJ6svaKY1pCXSQmaPSNUkDwrBARX4x6I3UO1B9zIj3qOnfOmT3-_qOwC44vAHiR88AIDWbO2F_qvv0Uu-G2eJw7_kPl1z4ebAdTHnpvsYdyVGP1Ssq-FJAbh_tcL-W7y11Vtg3TwxWWJYlwdNW3nn-d2EyBBgApH7mq-6KlzBUrCrORZfDcnAUf7S-lgyQs2xAR46wt3bm7rnQeRi0GcHedxiKRzlSA1o3r-egUpIV_ZlUqY2G2WSxdM9cEpRJjdc3AvFjaqGVnJaBgLw1wOkJdxWbK9SOL28LSIWWyrZwtm_AZrkOWWCW2-tUD2HaipkXerhDZOH4Q7Z3ri-2vQ3TbxaNNjpp99StotrgBouL6Wd0wEvWIbfJBZ1Mdv5TYIRsIOQsnG4hyiZxUMLKA-jjYRsA7kg2Mm4g3UiajaskfJpr2IYcGMZS6qiGTjNd_01Fn4rDI7z9n6J03TZjdLg4fRSQmvEL3MARB32APKlUr1boaWmkav9JKOvVdNqlEBnkSHjqOjvPQEcAm-qiszkAFlIINNKp2K_H_hhj_AHXWrqldX63RYJYaGH1z6E5Z5uDk9awajFYYZ4fPRUyqRekYB7CFQq6rw=s972-no?authuser=0" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started from .... to...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
            </div>
    </article>
  )
}