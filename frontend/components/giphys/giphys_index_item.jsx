import React from 'react';

function GiphysIndexItem({giphy, handleImg}) {
  return (
    <li className="giphy-li">
      <img
        src={giphy.images.fixed_height.url}
        onClick={(e) => handleImg(e)}
      />
    </li>
  );
}

export default GiphysIndexItem;
