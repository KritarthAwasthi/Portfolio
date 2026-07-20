import React from 'react'

const Hero = () => {
    return (
        <div className='p-10 flex-col flex-1 justify-items-center'>
            <div className="text flex-col justify-items-center">
                <h1 className='text-8xl p-5'>Hi! I'm <span>Kritarth Awasthi</span></h1>
                <h3 className='text-4xl pb-5'>Full Stack Developer Proficient In Java</h3>
            </div>
            <div className="photo size-auto content-center overflow-y-hidden w-80 h-80 rounded-full  border-8 pb-10"><img src="/src/assets/photo-gym.jpg" alt="" /></div>
            <div className="cta text-2xl p-10 flex flex-col gap-4">
                <button className='text-white bg-gray-400 px-5 py-2 rounded-4xl'>Projects</button>
                <button className='text-gray-400 bg-white px-5 py-2 rounded-4xl'>Resume</button>
            </div>
        </div>
    )
}

export default Hero
