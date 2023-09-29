import NavBar from '../NavBar/NavBar.jsx';
import styles from './Header.module.css';

export default function Header({ user, setUser }) {
  return (
    <header className={styles.headerComponent}>
      <h1>Event Assembly</h1>
      <NavBar user={user} setUser={setUser} />
    </header>
  );
}