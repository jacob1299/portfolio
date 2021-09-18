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
        <div className='bg-black w-screen mt-auto'>
            <div className="flex flex-row justify-around w-1/2 mx-auto text-white">
              {React.Children.toArray(footerItems.map((item, index) => (
                <a className="my-2" href={`${item}[${index}].link`} >
                    <div><Icon url={item.image} height='12'/></div>
                </a>
              )))}  
            </div>
        </div>
        
    )
}
