export async function getPastEvents(numOfEvents) {
  const res = await fetch(`/api/events/past/${numOfEvents}`);
  console.log('IN EVENTS API (getPastEvents):', res)
  return res.json();
}

export async function getUpcomingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/upcoming/${userID}/${numOfEvents}`);
  console.log('IN EVENTS API (getUpcomingEvents):', res)
  return res.json();
}

export async function getHostingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/hosting/${userID}/${numOfEvents}`);
  console.log('IN EVENTS API (getHostingEvents):', res)
  return res.json();
}

export async function getAttendingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/attending/${userID}/${numOfEvents}`);
  console.log('IN EVENTS API (getAttendingEvents):', res)
  return res.json();
}