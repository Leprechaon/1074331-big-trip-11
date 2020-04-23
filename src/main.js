import {generateEvents} from "./mock/event.js";
import BoardController from "./controllers/board.js";
import HeaderController from "./controllers/header.js";

const TASK_COUNT = 20;

const events = generateEvents(TASK_COUNT);

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);
const headerController = new HeaderController(tripMainElement);
const boardController = new BoardController(tripEventsElement);

headerController.render();
boardController.render(events);
