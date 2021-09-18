import React from 'react'
import { Icon } from '../../components/Icon'
import inigo from '../../assets/inigo.jpg'

export const Jokes: React.FC = () => {
    return (
        <div className='flex flex-col overflow-hidden h-full w-full bg-gray-700'>
            <div className='text-3xl text-center text-pink-600 font-extrabold py-4'>
                Got ya
            </div>
            <div className='w-auto mx-auto'>
                <Icon url={inigo} height='4/5'/>
            </div>
        </div>
    )
}