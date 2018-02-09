import React from 'react';


function ScoreIndexItem({awayScore, homeScore, awayTeam, homeTeam, time}) {
  return(
    <li>
      <h1>{time}</h1>
      <section className="match-results">
      <p>{awayTeam}:  {awayScore}</p>
      <br></br>
      <p>{homeTeam}:  {homeScore}</p>
      </section>
    </li>
  );
}


export default ScoreIndexItem;
