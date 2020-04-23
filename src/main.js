import EventDestinationsComponent from "./components/event-destinations.js";
import EventDetailsComponent from "./components/event-details.js";
import EventEditComponent from "./components/event-edit.js";
import EventComponent from "./components/event.js";
import EventOffersComponent from "./components/event-offers.js";
import EventSortComponent from "./components/event-sort.js";
import NoPointsComponent from "./components/no-points.js";
import TripCostComponent from "./components/trip-cost.js";
import TripDayComponent from "./components/trip-day.js";
import TripDaysComponent from "./components/trip-days.js";
import TripFilterComponent from "./components/trip-filter.js";
import TripInfoComponent from "./components/trip-info.js";
import TripMenuComponent from "./components/trip-menu.js";
import {generateEventData} from "./mock/eventData.js";
import {generateEvents} from "./mock/event.js";
import {createEventGroups} from "./utils.js";
import {RenderPosition, render, replace} from "./utils/render.js";


const TASK_COUNT = 20;

const events = generateEvents(TASK_COUNT);
const renderEvent = (eventListElement, event) => {

  const replaceEventToEdit = () => {
    replace(
        eventListElement,
        eventEditComponent.getElement(),
        eventComponent.getElement()
    );
  };

  const replaceEditToEvent = () => {
    replace(
        eventListElement,
        eventComponent.getElement(),
        eventEditComponent.getElement()
    );
  };

  const onEscKeyDown = (evt) => {
    const isEscape = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscape) {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const eventComponent = new EventComponent(event);
  const editButton = eventComponent.getElement()
    .querySelector(`.event__rollup-btn`);

  editButton.addEventListener(`click`, () => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const eventData = generateEventData();
  const eventEditComponent = new EventEditComponent(eventData, event);
  const eventDetailsComponent = new EventDetailsComponent();
  eventEditComponent
    .getElement()
    .addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(
      eventListElement,
      eventComponent.getElement(),
      RenderPosition.BEFOREEND
  );
  render(
      eventEditComponent.getElement(),
      eventDetailsComponent.getElement(),
      RenderPosition.BEFOREEND
  );
  if (event.offers.length !== 0) {
    render(
        eventDetailsComponent.getElement(),
        new EventOffersComponent(event).getElement(),
        RenderPosition.BEFOREEND
    );
  }
  if (event.destination.description.length || event.destination.photo.length !== 0) {
    render(
        eventDetailsComponent.getElement(),
        new EventDestinationsComponent(event).getElement(),
        RenderPosition.BEFOREEND
    );
  }
};

const renderHeader = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripControls = tripMainElement
    .querySelector(`.trip-main__trip-controls`);
  const tripControlsHeader = tripControls
    .querySelector(`.trip-main__trip-controls h2`);
  const tripInfo = new TripInfoComponent();
  render(
      tripMainElement,
      tripInfo.getElement(),
      RenderPosition.AFTERBEGIN
  );
  render(
      tripInfo.getElement(),
      new TripCostComponent().getElement(),
      RenderPosition.BEFOREEND
  );
  render(
      tripControlsHeader,
      new TripMenuComponent().getElement(),
      RenderPosition.AFTEREND
  );
  render(
      tripControls,
      new TripFilterComponent().getElement(),
      RenderPosition.BEFOREEND
  );
};


const renderEventBoard = () => {
  const tripEventsElement = document.querySelector(`.trip-events`);
  const tripDaysComponent = new TripDaysComponent();
  const today = new Date();

  const isPast = events.every((event) => (event.endDate - today) < 0);

  if (isPast) {
    render(tripEventsElement, new NoPointsComponent().getElement(), RenderPosition.BEFOREEND);
    return;
  }


  render(
      tripEventsElement,
      new EventSortComponent().getElement(),
      RenderPosition.BEFOREEND
  );
  render(
      tripEventsElement,
      tripDaysComponent.getElement(),
      RenderPosition.BEFOREEND
  );
  const eventGroups = createEventGroups(events);
  eventGroups
  .map((eventDay, i) => {
    const tripDayComponent = new TripDayComponent(eventDay, i);
    render(
        tripDaysComponent.getElement(),
        tripDayComponent.getElement(),
        RenderPosition.BEFOREEND
    );
    const tripEventsListElement = tripDayComponent
      .getElement()
      .querySelector(`.trip-events__list`);
    eventDay
      .map((it) => renderEvent(tripEventsListElement, it)
      );
  });
};

renderHeader();
renderEventBoard();
