import React from 'react';

// export const PhotoFrame = () => {
   
// }
export const PhotoFrame = ({ url, title }) => (
  <div className="photoframe">
    <img src={url} alt={title} />
    <div className="caption">{title}</div>
  </div>
);
