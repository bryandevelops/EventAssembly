import { useNavigate, useLocation, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import styles from './Header.module.css';

export default function Header({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(e) {
    e.preventDefault()
    console.log(location.pathname)
    user ? navigate('/dashboard') : navigate('/')
  }

  return (
    <header className={styles.headerComponent}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle} onClick={handleClick}>Event Assembly</h1>
        {
          user ? (
            <div className={styles.linksContainer}>
              <Link to='/dashboard' className={location.pathname === '/dashboard' ? `${styles.headerLinks} ${styles.selectedLink}` : `${styles.headerLinks}`}>Dashboard</Link>|
              <Link to='/dashboard/create-event' className={location.pathname === '/dashboard/create-event' ? `${styles.headerLinks} ${styles.selectedLink}` : `${styles.headerLinks}`}>Create</Link>
            </div>
          ) : (
            <></>
          )
        }
      </div>
      <NavBar user={user} setUser={setUser} />
    </header>
  );
}