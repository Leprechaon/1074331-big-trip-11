import {createElement, castDateTripDayFormat, formatDateTrip} from "../utils.js";

const createTripDayTemplate = (eventDay, index) => {
  const date = formatDateTrip(eventDay[0].startDate);
  const dateCast = castDateTripDayFormat(eventDay[0].startDate);
  return (
    `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${index}</span>
      <time class="day__date" datetime="${date}">${dateCast}</time>
    </div>
    <ul class="trip-events__list ${`event-day-` + index}"><ul>
    </li>`
  );
};

export default class TripDay {
  constructor(eventDay, index) {
    this._eventDay = eventDay;
    this._index = index;

    this._element = null;
  }

  getTemplate() {
    return createTripDayTemplate(this._eventDay, this._index);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
