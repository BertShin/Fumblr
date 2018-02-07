import React from 'react';
import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys, handleImg}) => {
  return (
    <ul className="giphy-index">
      { giphys.map(giphy =>
        <GiphysIndexItem
          key={giphy.id}
          giphy={giphy}
          handleImg={handleImg}
        />)}
    </ul>
  );
};

export default GiphysIndex;
