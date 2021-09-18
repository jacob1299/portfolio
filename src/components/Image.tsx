import React from 'react'

interface ImageProps {
    url: string
    height: string
    iconClass?: string
}

export const Image: React.FC<ImageProps> = ({url, height, iconClass}) => {
    return (
            <img alt="" src={url} className={`rounded-xl w-auto h-${height} ${iconClass}`}/>
    )
}

