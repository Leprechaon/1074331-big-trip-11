import AbstractComponent from "./abstract-component.js";

export const SortType = {
  BY_PRICE: `by-price`,
  BY_TIME: `by-time`,
  DEFAULT: `default`
};


const createEventSortTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <span class="trip-sort__item  trip-sort__item--day">Day</span>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event"  class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
      <label class="trip-sort__btn" data-sort-type="${SortType.DEFAULT}" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" data-sort-type="${SortType.BY_TIME}" for="sort-time">
        Time
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price"  class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label class="trip-sort__btn" data-sort-type="${SortType.BY_PRICE}" for="sort-price">
        Price
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>

    <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`
  );
};

export default class EventSort extends AbstractComponent {
  constructor() {
    super();

    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createEventSortTemplate();
  }

  getSortType() {

  }

  setSortTypeChangeHandler(handler) {
    const sortButtons = this.getElement().querySelectorAll(`.trip-sort__btn`);
    [...sortButtons].map((sortButton) => sortButton.addEventListener(`click`, (evt) => {
      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    })
    );
  }
}
