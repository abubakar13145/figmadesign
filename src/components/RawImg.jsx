import React from 'react';

export function RawImg({ image, altText = '', className = '', ...props }) {
  return <img src={image} alt={altText} className={className} {...props} />;
}
