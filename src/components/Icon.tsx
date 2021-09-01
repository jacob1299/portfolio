import React from 'react'

interface IconProps {
    url: string
}

export const Icon: React.FC<IconProps> = ({url}) => {
    return (
        <div className="h-8 w-8">
            <img alt="" src={url} />
        </div>
    )
}

