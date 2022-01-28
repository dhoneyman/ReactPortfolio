import React from 'react';

export default function Contact() {
  return (
    <div className = 'uk-container'>
      <div className='uk-grid uk-child-width-expand@s uk-text-center'>
      {/* <h1>Contact</h1> */}
      <div className='container'>
      <div className=' uk-padding'>
        <h2>Dylan Honeyman</h2>
      </div>
      <div className='container uk-text-left'>
        <p>Want to reach out? Fill out the form or send me an email at <a href="mailto:dylanhoneyman@gmail.com">dylanhoneyman@gmail.com</a>. I'm always on the hunt for new and exciting projects so dont hesitate to reach out. </p>
        </div>
      </div>
      <form className='uk-padding uk-width-1-2'>
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">lets chat</legend>

          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Name" required/>
          </div>

          <div className="uk-margin">
            <input className="uk-input" type="email" placeholder="Email" required/>
          </div>

          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
          </div>
        </fieldset>
      </form>
      </div>
    </div>
  );
}
