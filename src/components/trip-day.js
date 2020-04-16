import {castDateTripDayFormat, formatDateTrip} from "../utils.js";
let dayCounter = 0;

export const createTripDayTemplate = (it, i) => {
  const date = formatDateTrip(it[0].startDate);
  const dateCast = castDateTripDayFormat(it[0].startDate);
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
