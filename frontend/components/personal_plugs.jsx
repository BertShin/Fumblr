import React from 'react';
import FaAngellist from 'react-icons/lib/fa/angellist';
import FaGitHubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';

const PersonalPlugs = () => {

  return (
    <div className="main-plug animated fadeIn">
      <a
        target="_blank"
        href="https://github.com/BertShin">
        <FaGitHubSquare />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/albert-w-shin-020311154/">
        <FaLinkedIn />
      </a>
      <a
        target="_blank"
        href="https://angel.co/bertshin?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar">
      <FaAngellist id="angel"/>
    </a>
    </div>
  );
};


export default PersonalPlugs;
