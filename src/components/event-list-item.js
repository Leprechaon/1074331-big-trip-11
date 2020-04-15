const takeTimeFromDate = (date) => {
  return date.substr(-5);
};

export const createEventListItemTemplate = (event) => {
  const {} = event;
  const type = `Taxi`;
  const startDate = `2019-03-18T09:30`;
  const endDate = `2019-03-18T11:00`;
  const startTime = takeTimeFromDate(startDate);
  const endTime = takeTimeFromDate(endDate);
  const typeDescription = `Taxi to `;
  const destination = `Amsterdam`;
  const eventPrice = 20;
  const offerPrice = 20;
  const offerDescription = `Order Uber`;
  const duration = 30;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${typeDescription} ${destination}</h3>

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
        <li class="event__offer">
          <span class="event__offer-title">${offerDescription}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offerPrice}</span>
         </li>
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};
