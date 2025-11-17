import React from 'react';

export function CustomCode({ code, className = '' }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: code }} />;
}
