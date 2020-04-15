import {getPreposition, castDateFormat} from "../utils.js";

const takeTimeFromDate = (date) => {
  return date.substr(-5);
};

const formatTime = (date) => {
  const year = date.getFullYear();
  const month = castDateFormat(date.getMonth() + 1);
  const day = castDateFormat(date.getDate());
  const hours = castDateFormat(date.getHours());
  const minutes = castDateFormat(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const getEventDuration = (start, end) => {
  const duration = end - start;
  const day = Math.floor(duration / 86400000);
  const hours = Math.floor((duration % 86400000) / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);

  return `${day > 0 ? castDateFormat(day) + `D` : ``} ${hours > 0 ? castDateFormat(hours) + `H` : ``} ${castDateFormat(minutes) + `M`}`;
};

const createEventOffersTemplate = (offer, i) => {
  const {service, price} = offer;
  return (
    `<li class="event__offer ${i > 2 ? `visually-hidden` : ``}">
    <span class="event__offer-title">${service}</span>
    &plus;
    &euro;&nbsp;<span class="event__offer-price">${price}</span>
   </li>`
  );
};

export const createEventListItemTemplate = (event) => {
  const {type, destination, startDate, endDate, eventPrice, offers} = event;
  const eventOffers = offers.map((it, i) => createEventOffersTemplate(it, i)).join(`\n`);
  const start = formatTime(startDate);
  const end = formatTime(endDate);
  const startTime = takeTimeFromDate(start);
  const endTime = takeTimeFromDate(end);
  const preposition = getPreposition(type);
  const duration = getEventDuration(startDate, endDate);
  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${preposition} ${destination}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${start}">${startTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${end}">${endTime}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${eventPrice}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${eventOffers}
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};
