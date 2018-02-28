import React from 'react';

import './content.css';

export function Content({ children, render = children }) {
  return <div className="content">{children()}</div>;
}
