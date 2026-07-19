import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between m-2 p-3 text-xl'>
            <div className="icon">i</div>
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
