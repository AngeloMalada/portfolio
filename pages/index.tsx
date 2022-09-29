import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen scroll-smooth overflow-x-hidden z-0">
      <Head>
        <title>Angelo portfolio</title>
      </Head>
  
    <Header />
    <section id="hero" >
    <Hero />
    </section> 

    <section id="about" >
      <About />
    </section>

    <section id="experience" >
      <Experience />
    </section>


    <section id="skills" >
      <Skills />

    </section>

    </div>
  )
}

export default Home
