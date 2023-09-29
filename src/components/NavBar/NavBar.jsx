import { useState } from 'react';
import { logOut } from '../../utilities/users-service.js';
import Modal from '../Modal/Modal.jsx';
import styles from './NavBar.module.css';

export default function NavBar({ user, setUser }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [buttonClicked , setButtonClicked] = useState(null)

  function handleLogOut() {
    logOut()
    setUser(null)
  }

  return (
    <nav className={styles.navComponent}>
      {
        user ? (
          <button className={styles.btn} onClick={handleLogOut}>Log Out</button>
        ) : (
          <>
            <button className={`${styles.btn} ${styles.signUpBtn}`} onClick={() => { setShowSignUpModal(!showSignUpModal); setButtonClicked('Sign Up') }}>Sign Up</button>
            <button className={styles.btn} onClick={() => { setShowSignInModal(!showSignInModal); setButtonClicked('Sign In') }}>Sign In</button>
            {showSignUpModal ? <Modal showModal={showSignUpModal} setShowModal={setShowSignUpModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
            {showSignInModal ? <Modal showModal={showSignInModal} setShowModal={setShowSignInModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
          </>
        )
      }
    </nav>
  );
}