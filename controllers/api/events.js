import { Event } from '../../models/eventModel.js';

export async function getFivePastEvents(req, res) {
  try {
    const events = await Event.find({ date: { $lt: new Date() } }).limit(5).sort({date: 'asc'});
    console.log('yur')
    res.json(events)
  } catch(error) {
    console.log(error.message)
    res.status(400).json({ message: error.message })
  }
}