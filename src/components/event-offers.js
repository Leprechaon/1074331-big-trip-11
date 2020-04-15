import {getRandomIntegerNumber} from "../utils.js";

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
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${price}</span>
    </label>
  </div>`
  );
};

export const createEventOffersTemplate = (eventData) => {
  const {offers} = eventData;
  const someOffers = offers.slice();
  someOffers.length = getRandomIntegerNumber(0, 5);
  const eventOffer = someOffers.map((it, i) => createEventOfferTemplate(it, i)).join(`\n`);

  return (
    `${eventOffer.length > 0 ? `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${eventOffer}
    </div>
  </section>` : ``}`
  );
};
