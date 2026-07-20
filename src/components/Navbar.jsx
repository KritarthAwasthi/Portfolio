import React, { useState } from 'react'

const Navbar = () => {

    const [panel, setPanel] = useState(false);

    return (
        <div className='flex justify-between p-5 text-xl'>
            <div onClick={() => setPanel(true)} className="photo-icon size-auto content-center overflow-y-hidden w-10 h-10 rounded-full"><img src="/src/assets/photo-gym.jpg" alt="" /></div>
            {panel && (
                <div className="fixed top-0 left-0 h-200 w-80 bg-amber-200 z-50">
                    <div onClick={() => setPanel(false)} className="close relative right-0"><h1>X</h1></div>
                </div>
            )}
            <div className="buttons">
                <ul className='flex gap-4'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Education</a></li>
                    <li><a href="">Achivements</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
