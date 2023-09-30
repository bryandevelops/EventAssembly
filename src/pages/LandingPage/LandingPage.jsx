import { useState, useEffect } from 'react';
import * as eventsService from '../../utilities/events-service.js'
import CallToAction from '../../components/CallToAction/CallToAction.jsx';
import EventListItem from '../../components/PastEventListItem/PastEventListItem.jsx';
import styles from './LandingPage.module.css';

export default function LandingPage({ setUser }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function getFivePastEvents() {
      try {
        const events = await eventsService.getFivePastEvents()
        console.log('IN LANDING PAGE:', events)
        setEvents(events)
      } catch(error) {
        console.log(error.message)
      }
    }
    getFivePastEvents()
  }, [])

  return (
    <main>
      <CallToAction setUser={setUser} />
      <section className={styles.landingEventsSection}>
        <h1>Past Events</h1>
        <p>
          Get a sense of what to expect when you join!
          There are plenty of different events assembled by a variety of people.
          Join today to find one you resonate with.
        </p>
        <ul className={styles.landingUl}>
          {
            events.map(event => {
              return (
                <EventListItem key={event._id} setUser={setUser} {...event} />
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}