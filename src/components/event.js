import AbstractComponent from "./abstract-component.js";
import {formatTimeEvent, getPreposition} from "../utils/common.js";

const takeTimeFromDate = (date) => {
  return date.substr(-5);
};

const createEventOffersTemplate = (offer, i) => {
  const {service, price} = offer;
  return (
    `<li class="event__offer ${i > 2 ? `visually-hidden` : ``}">
      <span class="event__offer-title">${service}</span>

      &plus;&euro;&nbsp;

      <span class="event__offer-price">${price}</span>
    </li>`
  );
};

const createEventTemplate = (event) => {
  const {
    type,
    destination,
    duration,
    startDate,
    endDate,
    eventPrice,
    offers
  } = event;
  const {place} = destination;
  const eventOffers = offers
    .filter((it) => it.isChecked)
    .map((it, i) => createEventOffersTemplate(it, i))
    .join(`\n`);
  const start = formatTimeEvent(startDate);
  const end = formatTimeEvent(endDate);
  const startTime = takeTimeFromDate(start);
  const endTime = takeTimeFromDate(end);
  const preposition = getPreposition(type);

  return (
    `<li class="trip-events__item">
      <div class="event">

        <div class="event__type">
          <img
              class="event__type-icon"
              width="42"
              height="42"
              src="img/icons/${type.toLowerCase()}.png"
              alt="Event type icon">
        </div>

        <h3 class="event__title">${type} ${preposition} ${place}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${start}">
              ${startTime}
            </time>

            &mdash;

            <time class="event__end-time" datetime="${end}">
              ${endTime}
            </time>
          </p>

          <p class="event__duration">${duration}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;

          <span class="event__price-value">${eventPrice}</span>
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

export default class Event extends AbstractComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  setEventRollupButtonClickHandler(handler) {
    return this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}
