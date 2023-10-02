import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js';
import NextEventsListItem from '../../components/NextEventsListItem/NextEventsListItem.jsx';
import styles from './NextEvents.module.css';

export default function NextEvents({ user }) {
  const [userNextEvents, setUserNextEvents] = useState([]);

  function sortAscending(a, b) {
    if (a.date < b.date) {
      return -1
    } else if (a.date > b.date) {
      return 1
    } else {
      return 0
    }
  }

  useEffect(() => {
    async function getUserNextEvents(userID, numOfEvents = 0) {
      try {
        const hostingEvents = await eventsService.getHostingEvents(userID, numOfEvents);
        const attendingEvents = await eventsService.getAttendingEvents(userID, numOfEvents);
        const nextEvents = [...hostingEvents, ...attendingEvents].slice(0, 8).sort(sortAscending);
        console.log('IN DASHBOARD PAGE (getHosting, getAttending):', nextEvents)
        setUserNextEvents(nextEvents)
      } catch(error) {
        console.log(error.message)
      }
    }
    getUserNextEvents(user._id, 5)
  }, [])

  return (
    <aside className={styles.userEventsComponent}>
      <div className={styles.userEventsContainer}>
        <div className={styles.yourNextEventsDiv}>
          <h3>Your next events</h3>
          <Link to=''>View all</Link>
        </div>
        <p className={styles.userEventsMessage}>
          Here is a preview of upcoming events that you're hosting and/or attending.
        </p>
        {
          userNextEvents.length !== 0 ? (
            <ul className={styles.userEventsUl}>
              {
                userNextEvents.map(event => {
                  return (
                    <NextEventsListItem key={event._id} {...event} />
                  );
                })
              }
            </ul>
          ) : (
            <p className={styles.noUserEventsMessage}>You have not created or registered for any events</p>
          )
        }
      </div>
    </aside>
  );
}