import * as eventsAPI from './events-api.js';

export async function getPastEvents(numOfEvents) {
  const pastEvents = await eventsAPI.getPastEvents(numOfEvents);
  console.log('IN EVENTS SERVICE (getPastEvents):', pastEvents)
  return pastEvents;
}

export async function getUpcomingEvents(userID, numOfEvents) {
  const upcomingEvents = await eventsAPI.getUpcomingEvents(userID, numOfEvents);
  console.log('IN EVENTS SERVICE (getUpcomingEvents):', upcomingEvents)
  return upcomingEvents;
}

export async function getHostingEvents(userID, numOfEvents) {
  const hostingEvents = await eventsAPI.getHostingEvents(userID, numOfEvents);
  console.log('IN EVENTS SERVICE (getHostingEvents):', hostingEvents)
  return hostingEvents;
}

export async function getAttendingEvents(userID, numOfEvents) {
  const hostingEvents = await eventsAPI.getAttendingEvents(userID, numOfEvents);
  console.log('IN EVENTS SERVICE (getAttendingEvents):', hostingEvents)
  return hostingEvents;
}

export async function getEvent(eventID) {
  const event = await eventsAPI.getEvent(eventID);
  console.log('IN EVENTS SERVICE (getEvent):', event)
  return event;
}

export async function createEvent(formData) {
  const createdEvent = await eventsAPI.createEvent(formData);
  console.log('IN EVENTS SERVICE (createEvent):', createdEvent)
  return createdEvent;
}

export async function editEvent(eventID, formData) {
  const editedEvent = await eventsAPI.editEvent(eventID, formData);
  console.log('IN EVENTS SERVICE (editEvent):', editedEvent)
  return editedEvent;
}

export async function deleteEvent(eventID) {
  const deletedEvent = await eventsAPI.deleteEvent(eventID);
  console.log('IN EVENTS SERVICE (deleteEvent):', deletedEvent)
  return deletedEvent;
}