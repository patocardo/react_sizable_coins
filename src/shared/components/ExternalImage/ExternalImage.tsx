import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ExternalImageProps } from './ExternalImage.types'

const ExternalImage = ({ width, height, src, alt = '' }: ExternalImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = src;
  }, []);

  console.log(src);
  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon icon={faImage} size="2x" />
      ): (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default ExternalImage;
