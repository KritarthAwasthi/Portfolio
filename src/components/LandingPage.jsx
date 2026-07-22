import React from 'react'
import Navbar from "./Navbar"
import Hero from "./Hero"

const LandingPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default LandingPage
