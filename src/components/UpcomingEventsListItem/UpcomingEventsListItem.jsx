import { useNavigate } from 'react-router-dom';
import styles from './UpcomingEventsListItem.module.css';

export default function UpcomingEventsListItem({ _id, title, date, location, description, createdBy, attendees}) {
  const navigate = useNavigate();
  const eventDate = new Date(date);
  const eventTime = eventDate.toLocaleTimeString().substring(0, 4) + eventDate.toLocaleTimeString().substring(7);

  function handleClick(e) {
    e.preventDefault();
    navigate(`/events/${_id}`)
  }

  return (
    <li className={styles.eventLi} onClick={handleClick}>
      <h3>Hosted by {createdBy.name}</h3>
      <h4>{eventDate.toDateString()}&nbsp;&bull;&nbsp;{eventTime}</h4>
      <h1>{title}</h1>
      <h5>{location}&nbsp;&bull;&nbsp;{attendees.length} attendee{attendees.length === 1 ? '' : 's'}</h5>
      {description ? <p>{description}</p> : <p>No description.</p>}
    </li>
  );
}