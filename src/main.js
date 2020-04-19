import EventDestinations from "./components/event-destinations.js";
import EventDetails from "./components/event-details.js";
import EventEdit from "./components/event-edit.js";
import EventListItem from "./components/event-list-item.js";
import EventOffers from "./components/event-offers.js";
import EventSort from "./components/event-sort.js";
import TripCost from "./components/trip-cost.js";
import TripDay from "./components/trip-day.js";
import TripDays from "./components/trip-days.js";
import TripFilter from "./components/trip-filter.js";
import TripInfo from "./components/trip-info.js";
import TripMenu from "./components/trip-menu.js";
import {generateEventData} from "./mock/eventData.js";
import {generateEvents} from "./mock/event.js";
import {render, RenderPosition} from "./utils.js";

const TASK_COUNT = 20;

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

let dayCounter = 0;
let prevDate = 0;

const eventGroups = events.reduce((eventDate, event) => {
  const date = event.startDate.getDate();
  if (date !== prevDate) {
    dayCounter++;
    eventDate[dayCounter] = [];
  }
  eventDate[dayCounter].push(event);
  prevDate = date;
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
      .map((it, index) =>
        render(dayEventsList, createEventListItemTemplate(it, index)));
  })
  .join(`\n`);
