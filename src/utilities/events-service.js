import * as eventsAPI from './events-api.js';

export async function getFivePastEvents() {
  const events = await eventsAPI.getFivePastEvents();
  console.log('IN EVENTS SERVICE:', events)
  return events;
}