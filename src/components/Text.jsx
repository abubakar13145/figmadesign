import React from 'react';

export function Text({ tagName = 'div', text, children, className = '', ...props }) {
  const Component = tagName;
  return (
    <Component className={className} {...props}>
      {text || children}
    </Component>
  );
}
