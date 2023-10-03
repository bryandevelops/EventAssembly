import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js';
import Modal from '../../components/Modal/Modal.jsx';
import styles from './EventShowPage.module.css';

export default function EventShowPage({ user }) {
  const [showModal, setShowModal] = useState(false)
  const [event, setEvent] = useState(null);
  const { eventID } = useParams();

  useEffect(() => {
    async function getEvent(eventID) {
      try {
        const event = await eventsService.getEvent(eventID);
        console.log('IN EVENT SHOW PAGE (getEvent):', event)
        setEvent(event)
      } catch(error) {
        console.log(error.message)
      }
    }
    getEvent(eventID)
  }, [])

  async function handleClick() {
    try {
      const deletedEvent = await eventsService.deleteEvent(eventID);
      console.log('IN EVENT SHOW PAGE (deleteEvent):', deletedEvent)
    } catch(error) {
      console.log(error.message)
    }
  }
  
  return (
    <main className={styles.eventShowPage}>
      {
        event ? (
          <>
            <div className={styles.eventShowContainer}>
              <h3 className={styles.eventShowHost}><span>Hosted by</span> {event.createdBy.name}</h3>
              {
                user._id === event.createdBy._id ? (
                  <div className={styles.linksContainer}>
                    <Link to={`/events/${eventID}/edit-event`} state={event} className={styles.eventShowEdit}>Edit</Link>
                    <span className={styles.eventShowSpan}>|</span>
                    <Link to={'/dashboard'} onClick={handleClick} className={styles.eventShowDelete}>Delete</Link>
                  </div>
                ) : (
                  <></>
                )
              }
            </div>
            <h1 className={styles.eventShowTitle}>{event.title}</h1>
            <div className={styles.detailsContainer}>
              <h4 className={styles.eventShowDate}>{new Date(event.date).toDateString()}&nbsp;&bull;&nbsp;{new Date(event.date).toLocaleTimeString().substring(0, 4) + new Date(event.date).toLocaleTimeString().substring(7)}</h4>
              <span className={styles.eventShowSpan}>|</span>
              <h4 className={styles.eventShowLocation} onClick={() => setShowModal(!showModal)}>{event.location}&nbsp;&bull;&nbsp;<span>{event.attendees.length} attendee{event.attendees.length === 1 ? '' : 's'}</span></h4>
              {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} attendees={event.attendees} /> : ''}
            </div>
            {event.description ? <p className={styles.eventShowDescription}>{event.description}</p> : <p className={styles.eventShowDescription}>No description.</p>}
          </>
        ) : (
          <h1>Loading</h1>
        )
      }
    </main>
  );
}