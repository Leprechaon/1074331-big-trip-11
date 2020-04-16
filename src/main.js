import {createEventDestinationsTemplate} from "./components/event-destinations.js";
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
import {generateEventData} from "./mock/eventData.js";
import {generateEvents} from "./mock/event.js";


const TASK_COUNT = 20;

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

const eventData = generateEventData();
const events = generateEvents(TASK_COUNT);
const eventEdit = events.shift();
render(tripEventsElement, createEventEditTemplate(eventData, eventEdit));

const tripEventEditElement = tripEventsElement
  .querySelector(`.event--edit`);

render(tripEventEditElement, createEventDetailsTemplate());

const tripEventDetailsElement = tripEventEditElement
  .querySelector(`.event__details`);

render(tripEventDetailsElement, createEventOffersTemplate(eventData));
render(tripEventDetailsElement, createEventDestinationsTemplate(events[0]));

const eventGroups = events.reduce((eventDate, event) => {
  const date = event.startDate.getDate();
  if (!eventDate[date]) {
    eventDate[date] = [];
  }
  eventDate[date].push(event);
  return eventDate;
}, []);

render(tripEventsElement, createTripDaysTemplate());

const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);

eventGroups
  .map((eventDay, i) => {
    render(tripDaysElement, createTripDayTemplate(eventDay, i));

    const dayEventsList = tripDaysElement
      .querySelector(`.${`event-day-` + i}`);
    eventDay
      .forEach((it) =>
        render(dayEventsList, createEventListItemTemplate(it)));
  })
  .join(`\n`);
