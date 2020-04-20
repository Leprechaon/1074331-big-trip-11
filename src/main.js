import EventDestinationsComponent from "./components/event-destinations.js";
import EventDetailsComponent from "./components/event-details.js";
import EventEditComponent from "./components/event-edit.js";
import EventComponent from "./components/event.js";
import EventOffersComponent from "./components/event-offers.js";
import EventSortComponent from "./components/event-sort.js";
import TripCostComponent from "./components/trip-cost.js";
import TripDayComponent from "./components/trip-day.js";
import TripDaysComponent from "./components/trip-days.js";
import TripFilterComponent from "./components/trip-filter.js";
import TripInfoComponent from "./components/trip-info.js";
import TripMenuComponent from "./components/trip-menu.js";
import {generateEventData} from "./mock/eventData.js";
import {generateEvents} from "./mock/event.js";
import {render, RenderPosition} from "./utils.js";
import TripCost from "./components/trip-cost.js";

const TASK_COUNT = 20;

const renderEvent = (eventListElement, event) => {

  const onEditButtonClick = () => {
    eventListElement.replaceChild(EventEditComponent.getElement(), EventComponent.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(EventComponent.getElement(), EventEditComponent.getElement());
  };

  const eventComponent = new EventComponent(event);
  const editButton = eventComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, onEditButtonClick);

  const eventEditComponent = new EventEditComponent(event);
  const editForm = eventEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, onEditFormSubmit);

  render(eventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderHeader = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripControls = tripMainElement.querySelector(`.trip-main__trip-controls`);
  const tripControlsHeader = tripControls.querySelector(`.trip-main__trip-controls h2`);
  const tripInfo = new TripInfoComponent();
  render(tripMainElement, tripInfo.getElement(), RenderPosition.AFTERBEGIN);
  render(tripInfo.getElement(), new TripCost().getElement(), RenderPosition.BEFOREEND);
  render(tripControlsHeader, new TripMenuComponent().getElement(), RenderPosition.AFTEREND);
  render(tripControls, new TripFilterComponent().getElement(), RenderPosition.BEFOREEND);
};


const renderEventBoard = () => {

};
renderHeader();
renderEventBoard();

// const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
//

// render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

// const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

// render(tripInfoElement, createTripCostTemplate());
// render(tripControlsElement, createTripMenuTemplate());
// render(tripControlsElement, createTripFilterTemplate());
// render(tripEventsElement, createEventSortTemplate());

// const eventData = generateEventData();
// const events = generateEvents(TASK_COUNT);
// const eventEdit = events.shift();
// render(tripEventsElement, createEventEditTemplate(eventData, eventEdit));

// const tripEventEditElement = tripEventsElement
//   .querySelector(`.event--edit`);

// render(tripEventEditElement, createEventDetailsTemplate());

// const tripEventDetailsElement = tripEventEditElement
//   .querySelector(`.event__details`);

// render(tripEventDetailsElement, createEventOffersTemplate(eventData));
// render(tripEventDetailsElement, createEventDestinationsTemplate(events[0]));

// let dayCounter = 0;
// let prevDate = 0;

// const eventGroups = events.reduce((eventDate, event) => {
//   const date = event.startDate.getDate();
//   if (date !== prevDate) {
//     dayCounter++;
//     eventDate[dayCounter] = [];
//   }
//   eventDate[dayCounter].push(event);
//   prevDate = date;
//   return eventDate;
// }, []);

// render(tripEventsElement, createTripDaysTemplate());

// const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);


// eventGroups
//   .map((eventDay, i) => {
//     render(tripDaysElement, createTripDayTemplate(eventDay, i));

//     const dayEventsList = tripDaysElement
//       .querySelector(`.${`event-day-` + i}`);
//     eventDay
//       .map((it, index) =>
//         render(dayEventsList, createEventListItemTemplate(it, index)));
//   })
//   .join(`\n`);
