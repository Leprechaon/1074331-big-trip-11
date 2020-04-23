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
import {createEventGroups} from "./utils/common.js";
import {RenderPosition, render, replace} from "./utils/render.js";


const TASK_COUNT = 20;

const events = generateEvents(TASK_COUNT);
const renderEvent = (eventListElement, event) => {

  const replaceEventToEdit = () => {
    replace(eventEditComponent, eventComponent);
  };

  const replaceEditToEvent = () => {
    replace(eventComponent, eventEditComponent);
  };

  const onEscKeyDown = (evt) => {
    const isEscape = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscape) {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const eventComponent = new EventComponent(event);
  eventComponent.setEventRollupButtonClickHandler(() => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const eventData = generateEventData();
  const eventEditComponent = new EventEditComponent(eventData, event);

  eventEditComponent.setSubmitHandler((evt) => {
    evt.preventDefault();
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(
      eventListElement,
      eventComponent,
      RenderPosition.BEFOREEND
  );

  const eventDetailsComponent = new EventDetailsComponent();

  render(
      eventEditComponent.getElement(),
      eventDetailsComponent,
      RenderPosition.BEFOREEND
  );
  if (event.offers.length !== 0) {
    render(
        eventDetailsComponent.getElement(),
        new EventOffersComponent(event),
        RenderPosition.BEFOREEND
    );
  }
  if (event.destination.description.length || event.destination.photo.length !== 0) {
    render(
        eventDetailsComponent.getElement(),
        new EventDestinationsComponent(event),
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


const renderEventBoard = () => {
  const tripEventsElement = document.querySelector(`.trip-events`);
  const tripDaysComponent = new TripDaysComponent();
  const today = new Date();

  const isPast = events.every((event) => (event.endDate - today) < 0);

  if (isPast) {
    render(tripEventsElement, new NoPointsComponent(), RenderPosition.BEFOREEND);
    return;
  }


  render(
      tripEventsElement,
      new EventSortComponent(),
      RenderPosition.BEFOREEND
  );
  render(
      tripEventsElement,
      tripDaysComponent,
      RenderPosition.BEFOREEND
  );
  const eventGroups = createEventGroups(events);
  eventGroups
  .map((eventDay, i) => {
    const tripDayComponent = new TripDayComponent(eventDay, i);
    render(
        tripDaysComponent.getElement(),
        tripDayComponent,
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
