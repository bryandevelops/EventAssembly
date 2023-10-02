import { Event } from '../../models/eventModel.js';

// Query for events whose date are from before today's date
export async function getPastEvents(req, res) {
  const { numOfEvents } = req.params;
  
  try {
    const pastEvents = await Event.find({
      date: { $lt: new Date() }
    }).limit(numOfEvents).sort({ date: 'asc' });

    return res.json(pastEvents);
  } catch(error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message });
  }
}

// Query for events whose date are from today and onward. Exclude events the user is hosting and attending
export async function getUpcomingEvents(req, res) {
  const { userID, numOfEvents } = req.params;

  try {
    const upcomingEvents = await Event.find({
      createdBy: { $ne: userID },
      attendees: { $ne: userID },
      date: { $gte: new Date() }
    }).limit(numOfEvents).sort({ date: 'asc' }).populate('createdBy');

    return res.json(upcomingEvents);
  } catch(error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message });
  }
}

// Query for events whose date are from today and onward that the user is hosting
export async function getHostingEvents(req, res) {
  const { userID, numOfEvents } = req.params;
  
  try {
    const hostingEvents = await Event.find({
      createdBy: userID, 
      date: { $gte: new Date() }
    }).limit(numOfEvents).sort({ date: 'asc' });

    return res.json(hostingEvents);
  } catch(error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message });
  }
}

// Query for events whose date are from today and onward that the user is attending
export async function getAttendingEvents(req, res) {
  const { userID, numOfEvents } = req.params;

  try {
    const attendingEvents = await Event.find({
      attendees: userID,
      date: { $gte: new Date() }
    }).limit(numOfEvents).sort({ date: 'asc' });

    return res.json(attendingEvents);
  } catch(error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message });
  }
}