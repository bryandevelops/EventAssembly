import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import styles from './Header.module.css';

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  function handleClick() {
    user ? navigate('/dashboard') : navigate('/')
  }

  return (
    <header className={styles.headerComponent}>
      <h1 className={styles.headerTitle} onClick={handleClick}>Event Assembly</h1>
      <NavBar user={user} setUser={setUser} />
    </header>
  );
}