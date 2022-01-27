import React from 'react';

export default function About() {
  return (
    <div className='uk-grid'>
      <div className="uk-text-center  uk-width-1-3 uk-padding">
      <img className='portrait' src={process.env.PUBLIC_URL + "/selfbw.jpeg"} alt="" />
      </div>
      <div className='uk-text-left uk-width-1-3 uk-padding'>
      <h1>Dylan Honeyman.</h1>
      <h6>I am a Software Developer living and working in South Dallas.</h6>
      <p>
        I studied Geological Physics at the University of Texas at Dallas where I found my love 
        for math and data modeling. That led me to MySQL which jump started my career in software developement.
        I have a keen eye for design with an extensive background in photography and graphic design and love learning new things 
        and solving hard problems. 
      </p>
      </div>
    </div>
  );
}
