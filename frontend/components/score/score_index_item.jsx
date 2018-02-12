import React from 'react';


function ScoreIndexItem({ date, isCompleted, awayScore, homeScore, awayTeam, homeTeam, time}) {
  let status;
  if (isCompleted) {
    status = 'FINAL';
  } else {
    status = time;
  }
  return(
    <li>
      <section className="game-status">
        <h1>{status}</h1>
        <h1 className="game-date">{date}</h1>
      </section>
      <section className="away-team">
        <h2>{awayTeam}</h2>
        <h3>{awayScore}</h3>
      </section>
      <section className="home-team">
        <h2>{homeTeam}</h2>
        <h3>{homeScore}</h3>
      </section>
    </li>
  );
}


export default ScoreIndexItem;
