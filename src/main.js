import TripCostComponent from "./components/trip-cost.js";
import TripFilterComponent from "./components/trip-filter.js";
import TripInfoComponent from "./components/trip-info.js";
import TripMenuComponent from "./components/trip-menu.js";
import {generateEvents} from "./mock/event.js";
import {RenderPosition, render} from "./utils/render.js";
import BoardController from "./controllers/board.js";


const TASK_COUNT = 20;

const events = generateEvents(TASK_COUNT);

const renderHeader = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripControls = tripMainElement
    .querySelector(`.trip-main__trip-controls`);
  const tripControlsHeader = tripControls
    .querySelector(`.trip-main__trip-controls h2`);
  const tripInfo = new TripInfoComponent();
  render(
      tripMainElement,
      tripInfo,
      RenderPosition.AFTERBEGIN
  );
  render(
      tripInfo.getElement(),
      new TripCostComponent(),
      RenderPosition.BEFOREEND
  );
  render(
      tripControlsHeader,
      new TripMenuComponent(),
      RenderPosition.AFTEREND
  );
  render(
      tripControls,
      new TripFilterComponent(),
      RenderPosition.BEFOREEND
  );
};

const tripEventsElement = document.querySelector(`.trip-events`);
const boardController = new BoardController(tripEventsElement);

renderHeader();
boardController.render(events);
