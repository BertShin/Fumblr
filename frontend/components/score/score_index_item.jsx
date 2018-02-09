import React from 'react';


function ScoreIndexItem({awayScore, homeScore, awayTeam, homeTeam, time}) {
  return(
    <li>
      {time}
      {awayTeam}
      {awayScore}
      {homeTeam}
      {homeScore}
    </li>
  );
}


export default ScoreIndexItem;
