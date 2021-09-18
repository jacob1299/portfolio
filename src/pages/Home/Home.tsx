import React from 'react'
import { Icon } from '../../components/Icon'

import headshot from '../../../src/headshot_closeup.jpg'

export const Home: React.FC = () => {
    return (
            <div className='flex flex-row h-full overflow-hidden bg-gray-600'>
                <div className='flex flex-col'>
                    <div className='text-3xl font-extrabold pl-12 pt-8'>
                        Hi, I'm Jacob. <br/> 
                    </div>
                    <p className='text-lg pl-14 pt-4'> 
                        I have a strong passion for learning and desire to always do my best.
                        <br />Some call this a try-hard, but I call it <span className='text-green-600'>success.</span>
                    </p>
                    <div>
                        {`<DEVELOPER><br /><ENGINEER></ENGINEER><DEVELOPER>`}
                    </div>
                </div>
                <Icon url={headshot} height='11/12' iconClass='filter grayscale hover:grayscale-0 ml-auto mr-3 my-3 '/>
            </div>
    )
}