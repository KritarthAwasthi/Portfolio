import React, { useState } from 'react'

const Navbar = () => {

    const [panel, setPanel] = useState(false);

    return (
        <div className='flex justify-between p-5 text-xl'>
            <div onClick={() => setPanel(true)} className="photo-icon size-auto content-center overflow-y-hidden w-10 h-10 rounded-full"><img src="/src/assets/photo-gym.jpg" alt="" /></div>
            {panel && (
                <>
                    <div
                        onClick={() => setPanel(false)}
                        className="fixed inset-0 bg-black/50 z-40"
                    ></div>
                    <div className="fixed top-0 left-0 h-160 w-80 bg-amber-200 z-50">
                        <div className='flex justify-between pl-5 pr-2 pt-5 pb-3'>
                            <h1 className='text-4xl font-bold'>ABOUT ME</h1>
                            <div onClick={() => setPanel(false)} className="close ">
                                <button>X</button>
                            </div>
                        </div>
                        <div className='px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos? Consectetur architecto accusantium debitis officia aut voluptas beatae impedit non magnam tempore voluptatem, quod consequuntur itaque modi, dolorum, placeat autem!</div>
                    </div>
                </>
            )}
            <div className="buttons">
                <ul className='flex gap-4'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Education</a></li>
                    <li><a href="">Achievements</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar