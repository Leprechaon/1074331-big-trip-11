import EventDestinationsComponent from "../components/event-destinations.js";
import EventDetailsComponent from "../components/event-details.js";
import EventEditComponent from "../components/event-edit.js";
import EventComponent from "../components/event.js";
import EventOffersComponent from "../components/event-offers.js";
import EventSortComponent from "../components/event-sort.js";
import NoPointsComponent from "../components/no-points.js";
import TripDayComponent from "../components/trip-day.js";
import TripDaysComponent from "../components/trip-days.js";
import {generateEventData} from "../mock/eventData.js";
import {createEventGroups} from "../utils/common.js";
import {RenderPosition, render, replace} from "../utils/render.js";

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


export default class TripController {
  constructor(container) {
    this._container = container;
    this._tripDaysComponent = new TripDaysComponent();
    this._noPointsComponent = new NoPointsComponent();
    this._eventSortComponent = new EventSortComponent();
  }

  render(events) {
    const renderByDefault = (eventsUnsort) => {
      const eventGroups = createEventGroups(eventsUnsort);

      eventGroups
      .map((eventDay, i) => {
        const tripDayComponent = new TripDayComponent(eventDay, i);
        const tripDayElement = tripDayComponent.getElement();

        render(
            tripDaysElement,
            tripDayComponent,
            RenderPosition.BEFOREEND
        );
        const tripEventsListElement = tripDayElement
          .querySelector(`.trip-events__list`);
        eventDay
          .map((it) => renderEvent(tripEventsListElement, it)
          );
      });
    };

    const today = new Date();

    const isPast = events.every((event) => (event.endDate - today) < 0);

    if (isPast) {
      render(this._container, this._noPointsComponent, RenderPosition.BEFOREEND);
      return;
    }

    const container = this._container;
    const eventSortComponent = this._eventSortComponent;
    const tripDaysComponent = this._tripDaysComponent;
    const tripDaysElement = tripDaysComponent.getElement();


    render(
        container,
        eventSortComponent,
        RenderPosition.BEFOREEND
    );
    render(
        container,
        tripDaysComponent,
        RenderPosition.BEFOREEND
    );

    renderByDefault(events);

    this._eventSortComponent.setSortTypeChangeHandler(() => {
      tripDaysElement.innerHTML = ``;
      renderByDefault(events);
    });
  }
}
