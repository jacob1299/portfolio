import React from 'react'
import { Image } from '../../components/Image'

import headshot from '../../../src/headshot_closeup.jpg'
import aurora from '../../../src/assets/aurora.jpg'

export const Home: React.FC = () => {
    return (
            <div className='flex flex-row h-full overflow-hidden bg-indigo-900' >
            {/* style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)), url(${aurora})`} */}
                <div className='flex flex-col'>
                    <div className='text-3xl text-white font-extrabold pl-12 pt-8'>
                        Hi, I'm Jacob. <br/> 
                    </div>
                    <p className='text-2xl text-white pl-14 pt-4'> 
                        I have a strong passion for learning and desire to always do my best.
                        <br />Some call this a try-hard, but I call it <br /><span className='ml-96 pt-24 text-3xl font-bold text-green-600'>SUCCESS.</span>
                    </p>
                </div>
                <Image url={headshot} height='11/12' iconClass='filter grayscale hover:grayscale-0 ml-auto mr-3 my-3 '/>
            </div>
    )
}