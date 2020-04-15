import {generateEventActivities} from "../mock/eventData.js";

const takeTimeFromDate = (date) => {
  return date.substr(-5);
};

const getPreposition = (type) => {
  const types = generateEventActivities();
  return (types.some((it) => {
    return it.name === type;
  }) ? `in` : `to`);
};

const createEventOffersTemplate = (offer) => {
  const {service, price} = offer;
  return (
    `<li class="event__offer">
    <span class="event__offer-title">${service}</span>
    &plus;
    &euro;&nbsp;<span class="event__offer-price">${price}</span>
   </li>`
  );
};

export const createEventListItemTemplate = (event) => {
  const {type, destination, startDate, duration, eventPrice, offers} = event;
  const eventOffers = offers.map((it) => createEventOffersTemplate(it));
  const endDate = `2019-03-18T11:00`;
  const startTime = takeTimeFromDate(startDate);
  const endTime = takeTimeFromDate(endDate);
  const preposition = getPreposition(type);

  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${preposition} ${destination}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startDate}">${startTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${endDate}">${endTime}</time>
        </p>
        <p class="event__duration">${duration}M</p>
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
