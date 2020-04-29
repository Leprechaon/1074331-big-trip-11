import EventSortComponent, {SortType} from "../components/event-sort.js";
import NoPointsComponent from "../components/no-points.js";
import TripDayComponent from "../components/trip-day.js";
import TripDaysComponent from "../components/trip-days.js";
import PointController from "./point.js";
import {generateEventData} from "../mock/eventData.js";
import {createEventGroups} from "../utils/common.js";
import {RenderPosition, render} from "../utils/render.js";
import SortDayComponent from "../components/sort-day.js";

const getSortedEvents = (events, sortType) => {
  let sortedEvents = [];
  const showingEvents = events.slice();

  switch (sortType) {
    case SortType.BY_PRICE:
      sortedEvents = showingEvents.sort((a, b) => b.eventPrice - a.eventPrice);
      break;
    case SortType.BY_TIME:
      sortedEvents = showingEvents.sort((a, b) => b.duration - a.duration);
      break;
    case SortType.DEFAULT:
      return events;
  }

  return sortedEvents;
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
  }

  _onSortTypeChange(sortType) {
    const sortedEvents = getSortedEvents(events, sortType);
    tripDaysElement.innerHTML = ``;
    if (sortedEvents === events) {
      renderByDefault(events);
      return;
    }
    const sortDayComponent = new SortDayComponent();
    render(tripDaysElement, sortDayComponent, RenderPosition.BEFOREEND);
    const sortDay = sortDayComponent
        .getElement()
        .querySelector(`.trip-events__list`);

    sortedEvents.map((it) => renderEvent(sortDay, it));
  }
}
