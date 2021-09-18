import React from 'react'

interface IconProps {
    url: string
    height: string
    iconClass?: string
}

export const Icon: React.FC<IconProps> = ({url, height, iconClass}) => {
    return (
            <img alt="" src={url} className={`rounded-xl w-auto h-${height} ${iconClass}`}/>
    )
}

