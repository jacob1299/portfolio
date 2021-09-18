import React from 'react'
import { Image } from '../components/Image'
import { IconType } from 'react-icons'

interface FooterProps {
    footerItems: FooterItem[]
}

type FooterItem = {
    link: string
    image?: any
    Icon?: IconType
}


export const Footer: React.FC<FooterProps> = ({footerItems}) => {
    return (
        <div className='bg-black w-screen h-auto mt-auto'>
            <div className="flex flex-row justify-around w-1/2 h-auto mx-auto text-white">
              {React.Children.toArray(footerItems.map((item, index) => (
                <a className="my-2" href={`${item}[${index}].link`} >
                    {item.image && <Image url={item.image} height='12'/>}
                    {item.Icon && <item.Icon size='2em'></item.Icon>}
                </a>
              )))}  
            </div>
        </div>
    )
}
