import React from 'react';
import {NavLink} from 'react-router';

function GiphysIndexItem({giphy, handleImg}) {
  return (
    <li className="giphy-li">
      <a className="selected-img">
        <img
          src={giphy.images.fixed_height.url}
          height={190}
          width={230}
          onClick={(e) => handleImg(e)}
          tabIndex={0}
        />
      </a>
    </li>
  );
}

export default GiphysIndexItem;
