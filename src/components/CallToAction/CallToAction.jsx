import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import styles from './CallToAction.module.css';

export default function CallToAction({ setUser }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [buttonClicked , setButtonClicked] = useState(null)

  return (
    <section className={styles.splashSection}>
      <div className={styles.textContainer}>
        <small>ASSEMBLE TOGETHER</small>
        <h1>Get your ideas off the ground</h1>
        <p>
          Find other like-minded individuals with your same interests and assemble together to do something special.
          Join today to be able to connect with others, either by hosting your own events for people to attend or by creating an RSVP to attend someone else's.
          What starts off as an event has the opportunity to blossom into a community, and perhaps even something more...
        </p>
        <button onClick={() => { setShowSignUpModal(!showSignUpModal); setButtonClicked('Sign Up') }}>Join The Assembly</button>
        {showSignUpModal ? <Modal setUser={setUser} showModal={showSignUpModal} setShowModal={setShowSignUpModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
      </div>
      <div className={styles.imgContainer}>
        <img src="splash-img.png" alt="signup" />
      </div>
    </section>
  );
}