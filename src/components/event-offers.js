import AbstractComponent from "./abstract-component.js";


const createEventOfferTemplate = (offers, i) => {
  const {name, service, price, isChecked} = offers;
  return (
    `<div class="event__offer-selector">
      <input
          class="event__offer-checkbox  visually-hidden"
          id="event-offer-${name}-${i}"
          type="checkbox"
          name="event-offer-${name}"
          ${isChecked ? `checked` : ``}>

      <label class="event__offer-label" for="event-offer-${name}-${i}">
        <span class="event__offer-title">${service}</span>

        &plus;&euro;&nbsp;

        <span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
};

const createEventOffersTemplate = (event) => {
  const {offers} = event;
  const eventOffer = offers
    .map((it, i) => createEventOfferTemplate(it, i))
    .join(`\n`);

  return (
    `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">
          Offers
        </h3>
        <div class="event__available-offers">
          ${eventOffer}
        </div>
      </section>`
  );
};

export default class EventOffers extends AbstractComponent {
  constructor(eventData) {
    super();

    this._eventData = eventData;
  }

  getTemplate() {
    return createEventOffersTemplate(this._eventData);
  }
}
