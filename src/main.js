import HeaderController from "./controllers/header.js";
import TripController from "./controllers/trip.js";
import {generateEvents} from "./mock/event.js";

const TASK_COUNT = 20;

const events = generateEvents(TASK_COUNT);

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);
const headerController = new HeaderController(tripMainElement);
const boardController = new TripController(tripEventsElement);

headerController.render();
boardController.render(events);
