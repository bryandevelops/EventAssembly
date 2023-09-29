import SignUpForm from "../SignUpForm/SignUpForm.jsx";
import LoginForm from "../LoginFrom/LoginForm.jsx";
import './Modal.css'

export default function SignUpModal({ showModal, setShowModal, buttonClicked, setButtonClicked }) {
  return (
    <>
      <div className={`modal ${showModal ? '' : 'hidden'}`}>
        <button className="close-modal-btn" onClick={() => { setShowModal(!showModal); setButtonClicked(null) }}>&times;</button>
        {
          buttonClicked === 'Sign Up' ? (
              <SignUpForm setButtonClicked={setButtonClicked} />
          ) : buttonClicked === 'Sign In' ? (
              <LoginForm setButtonClicked={setButtonClicked} />
          ) : (
            ''
          )
        }
      </div>
      <div className={`overlay ${showModal ? '' : 'hidden'}`} onClick={() => { setShowModal(!showModal); setButtonClicked(null) }}></div>
    </>
  );
}