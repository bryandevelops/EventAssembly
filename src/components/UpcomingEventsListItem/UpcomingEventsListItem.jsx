import styles from './UpcomingEventsListItem.module.css';

export default function UpcomingEventsListItem({ title, date, location, description, createdBy, attendees}) {
  const eventDate = new Date(date);
  const eventTime = eventDate.toLocaleTimeString().substring(0, 4) + eventDate.toLocaleTimeString().substring(7);

  return (
    <li className={styles.eventLi}>
      <h3>Hosted by {createdBy.name}</h3>
      <h4>{eventDate.toDateString()}&nbsp;&bull;&nbsp;{eventTime}</h4>
      <h1>{title}</h1>
      <h5>{location}&nbsp;&bull;&nbsp;{attendees.length} attendee{attendees.length === 1 ? '' : 's'}</h5>
      <p>{description}</p>
    </li>
  );
}