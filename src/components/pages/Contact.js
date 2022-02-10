import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';

const customStyles = {
  content: {
    color: 'rgba(57, 62, 65, .75)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(88, 123, 127, .75)',
  },
};



export default function Contact() {
  Modal.setAppElement('#root');

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }






  
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_xx7292k', 'template_v5tzbva', form.current, 'user_soItZpUydlJ93Qgo5jfky')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };
  return (
    <div className='uk-container'>
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

        {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

        <form ref={form} 
        // onSubmit={sendEmail} 
        className='uk-padding uk-width-1-2'>
          <fieldset className="uk-fieldset">

            <legend className="uk-legend">lets chat</legend>

            <div className="uk-margin">
              <input name='from_name' className="uk-input" type="text" placeholder="Name" required />
            </div>

            <div className="uk-margin">
              <input name='reply_to' className="uk-input" type="email" placeholder="Email" required />
            </div>

            <div className="uk-margin">
              <textarea name='message' className="uk-textarea" rows="5" placeholder="Message"></textarea>
            </div>
          </fieldset>
   
          <p className='uk-margin'>
            <button 
            onClick={openModal} 
            id='submit'type='submit' className="uk-button uk-button-default">Send</button>

      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>You'll hear from me soon!</h2>
        
      </Modal>
        </p>

      </form>
    </div>

    
    </div>
  );
}

