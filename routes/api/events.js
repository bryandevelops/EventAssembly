import express from 'express';
import * as eventsController from '../../controllers/api/events.js';

const router = express.Router();

router.get('/past/:numOfEvents', eventsController.getPastEvents)
router.get('/upcoming/:numOfEvents', eventsController.getUpcomingEvents)
router.get('/hosting/:userID/:numOfEvents', eventsController.getHostingEvents)
router.get('/attending/:userID/:numOfEvents', eventsController.getAttendingEvents)

export default router;