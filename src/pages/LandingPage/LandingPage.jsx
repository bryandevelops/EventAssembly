import CallToAction from '../../components/CallToAction/CallToAction';
import styles from './LandingPage.module.css';

export default function LandingPage({ setUser }) {
  return (
    <main>
      <CallToAction setUser={setUser} />
    </main>
  );
}