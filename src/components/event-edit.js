import {getPreposition, castDateFormat} from "../utils.js";

const createEventTypeTemplate = (name, i, isChecked) => {
  const typeName = name.toLowerCase();
  return (
    `<div class="event__type-item">
    <input
      id="event-type-${typeName}-${i}"
      class="event__type-input  visually-hidden"
      type="radio"
      name="event-type"
      value="${typeName}"
      ${isChecked ? `checked` : ``}>
    <label class="event__type-label  event__type-label--${typeName}" for="event-type-${typeName}-${i}">${name}</label>
  </div>`
  );
};

const getStartDate = () => {
  const startDate = new Date();

  const year = startDate.getFullYear() - 2000;
  const month = castDateFormat(startDate.getMonth() + 1);
  const day = castDateFormat(startDate.getDate());
  const hours = castDateFormat(startDate.getHours());
  const minutes = castDateFormat(startDate.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const createEventDestinationsTemplate = (name) => {
  return `<option value="${name}"></option>`;
};

export const createEventEditTemplate = (events, event) => {
  const {transfers, activities, destinations} = events;
  const {type, destination} = event;
  const typeTransferMarkup = transfers.map((it, i) => createEventTypeTemplate(it.name, i, i === 0)).join(`\n`);
  const typeActivityMarkup = activities.map((it, i) => createEventTypeTemplate(it.name, i)).join(`\n`);
  const destinationsMarkup = destinations.map((it) => createEventDestinationsTemplate(it.place)).join(`\n`);
  const preposition = getPreposition(type);
  const startDate = getStartDate();
  const endDate = getStartDate();
  const eventPrice = ``;
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>
            ${typeTransferMarkup}
          </fieldset>

          <fieldset class="event__type-group">
            <legend class="visually-hidden">Activity</legend>
            ${typeActivityMarkup}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type} ${preposition}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.place}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${destinationsMarkup}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${eventPrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
  </form>`
  );
};
