import {castDateFormat} from "../utils.js";
import {MONTH_NAMES} from "../const.js";

let dayCounter = 0;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = castDateFormat(date.getMonth() + 1);
  const day = castDateFormat(date.getDate());

  return `${year}-${month}-${day}`;
};

const dateCastFormat = (date) => {
  const month = MONTH_NAMES[parseInt(castDateFormat(date.getMonth()), 10)];
  const day = castDateFormat(date.getDate());

  return `${month} ${day}`;
};

export const createTripDayTemplate = (it, i) => {
  const date = formatDate(it[0].startDate);
  const dateCast = dateCastFormat(it[0].startDate);
  dayCounter++;
  return (
    `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${dayCounter}</span>
      <time class="day__date" datetime="${date}">${dateCast}</time>
    </div>
    <ul class="trip-events__list ${`event-day-` + i}"><ul>
    </li>`
  );
};
