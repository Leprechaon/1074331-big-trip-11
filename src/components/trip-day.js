import AbstractComponent from "./abstract-component.js";
import {castDateTripDayFormat, formatDateTrip} from "../utils.js";

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

export default class TripDay extends AbstractComponent {
  constructor(eventDay, index) {
    super();

    this._eventDay = eventDay;
    this._index = index;
  }

  getTemplate() {
    return createTripDayTemplate(this._eventDay, this._index);
  }
}
