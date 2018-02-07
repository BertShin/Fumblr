import React from 'react';
import {NavLink} from 'react-router';

function GiphysIndexItem({giphy, handleImg}) {
  return (
    <li className="giphy-li">
      <a className="selected-img">
        <img
          src={giphy.images.fixed_height.url}
          onClick={(e) => handleImg(e)}
        />
      </a>
    </li>
  );
}

export default GiphysIndexItem;
