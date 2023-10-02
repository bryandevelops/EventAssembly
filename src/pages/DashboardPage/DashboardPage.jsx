import NextEvents from '../../components/NextEvents/NextEvents';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ user }) {
  return (
    <main className={styles.dashboardPage}>
      <h1 className={styles.userName}>Welcome, {user.name.split(' ')[0]} 👋</h1>
      <NextEvents user={user} />
      <UpcomingEvents />
    </main>
  );
}