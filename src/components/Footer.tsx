import React from 'react'
import { Icon } from '../components/Icon'

interface FooterProps {
    footerItems: FooterItem[]
}

type FooterItem = {
    link: string
    image: string
}


export const Footer: React.FC<FooterProps> = ({footerItems}) => {
    return (
        <div className="flex flex-row justify-around bg-black w-full h-auto text-white mt-auto">
              {footerItems.map((item, index) => (
                <a className="hover:text-blue text-white" href={`${item}[${index}].link`} >
                    <div>{item.link}</div>
                </a>
              ))}  
        </div>
    )
}

