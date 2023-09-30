import express from 'express';
import * as eventsController from '../../controllers/api/events.js';

const router = express.Router();

router.get('/past', eventsController.getFivePastEvents)

export default router;