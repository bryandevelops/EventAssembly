import * as eventsAPI from './events-api.js';

export async function getPastEvents(numOfEvents) {
  const pastEvents = await eventsAPI.getPastEvents(numOfEvents);
  console.log('IN EVENTS SERVICE (getPastEvents):', pastEvents)
  return pastEvents;
}

export async function getUpcomingEvents(numOfEvents) {
  const upcomingEvents = await eventsAPI.getUpcomingEvents(numOfEvents);
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