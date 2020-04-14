import {createEventDetailsTemplate} from "./components/event-details.js";
import {createEventEditTemplate} from "./components/event-edit.js";
import {createEventListItemTemplate} from "./components/event-list-item.js";
import {createEventOffersTemplate} from "./components/event-offers.js";
import {createEventSortTemplate} from "./components/event-sort.js";
import {createTripCostTemplate} from "./components/trip-cost.js";
import {createTripDayTemplate} from "./components/trip-day.js";
import {createTripDaysTemplate} from "./components/trip-days.js";
import {createTripFilterTemplate} from "./components/trip-filter.js";
import {createTripInfoTemplate} from "./components/trip-info.js";
import {createTripMenuTemplate} from "./components/trip-menu.js";
import {generateEventActivities, generateEventTransfers, generateEventDestinations} from "./mock/eventData.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = document.querySelector(`.trip-events`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

render(tripInfoElement, createTripCostTemplate());
render(tripControlsElement, createTripMenuTemplate());
render(tripControlsElement, createTripFilterTemplate());
render(tripEventsElement, createEventSortTemplate());

const transfers = generateEventTransfers();
const activities = generateEventActivities();
const destinations = generateEventDestinations();

render(tripEventsElement, createEventEditTemplate(transfers, activities, destinations));

const tripEventEditElement = tripEventsElement.querySelector(`.event--edit`);

render(tripEventEditElement, createEventDetailsTemplate());

const tripEventDetailsElement = tripEventEditElement.querySelector(`.event__details`);

render(tripEventDetailsElement, createEventOffersTemplate());
render(tripEventsElement, createTripDaysTemplate());

const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);

render(tripDaysElement, createTripDayTemplate());

const dayEventsList = tripDaysElement.querySelector(`.trip-events__list`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(dayEventsList, createEventListItemTemplate());
}
