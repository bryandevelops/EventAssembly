import { useState, useEffect, Fragment } from 'react';
import * as eventsService from '../../utilities/events-service.js';
import UpcomingEventsListItem from '../../components/UpcomingEventsListItem/UpcomingEventsListItem';
import styles from './ManageEventsPage.module.css';

export default function ManageEventsPage({ user }) {
  const [userEvents, setUserEvents] = useState([]);
  const [deletedEvent, setDeletedEvent] = useState(false);
  const [cancelledRsvp, setCancelledRsvp] = useState(false);

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
    async function getUserEvents(userID, numOfEvents = 0) {
      try {
        const hostingEvents = await eventsService.getHostingEvents(userID, numOfEvents);
        const attendingEvents = await eventsService.getAttendingEvents(userID, numOfEvents);
        const userEvents = [...hostingEvents, ...attendingEvents].sort(sortAscending);
        console.log('IN MANAGE EVENTS PAGE (getHosting, getAttending):', userEvents)
        setUserEvents(userEvents)
        setDeletedEvent(false)
      } catch(error) {
        console.log(error.message)
      }
    }
    getUserEvents(user._id)
  }, [deletedEvent, cancelledRsvp])

  return (
    <main className={styles.manageEventsPage}>
      <h1>Manage events</h1>
      <p>
        Manage the events that you're hosting and attending. Update your event info, delete an event, or cancel an RSVP right from here.
      </p>
      <ul className={styles.manageEventsUl}>
        {
          userEvents.map((event, idx) => {
            const currEventDate = new Date(event.date).toDateString();
            let dateChange = false;

            if (idx !== 0) {
              const prevEventDate = new Date(userEvents[idx - 1].date).toDateString();
              if (currEventDate !== prevEventDate) dateChange = true
            } else {
              dateChange = true
            }

            return (
              <Fragment key={idx}>
                {
                  dateChange ? (
                    <h1>🗓️ {currEventDate}</h1>
                  ) : (
                    <></>
                  )
                }
                <UpcomingEventsListItem key={event._id} user={user} setDeletedEvent={setDeletedEvent} setRsvp={setCancelledRsvp} {...event} />
              </Fragment>
            );
          })
        }
      </ul>
    </main>
  );
}