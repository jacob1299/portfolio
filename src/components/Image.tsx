import React from "react";

interface ImageProps {
  url: string;
  imageClass?: string;
}

export const Image: React.FC<ImageProps> = ({ url, imageClass }) => {
  return <img alt="" src={url} className={`rounded-lg ${imageClass}`} />;
};
