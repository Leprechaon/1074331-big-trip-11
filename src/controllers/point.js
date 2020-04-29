import EventDetailsComponent from "../components/event-details.js";
import EventEditComponent from "../components/event-edit.js";
import EventComponent from "../components/event.js";
import {RenderPosition, render, replace} from "../utils/render.js";
import EventOffersComponent from "../components/event-offers.js";
import EventDestinationsComponent from "../components/event-destinations.js";

export default class PointController {
  constructor(container) {
    this._container = container;

    this._eventComponent = null;
    this._eventEditComponent = null;
    this._eventOffersComponent = null;
    this._eventDetailsComponent = new EventDetailsComponent();
    this._eventDestinationsComponent = null;
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(eventData, event) {
    this._eventComponent = new EventComponent(event);
    this._eventEditComponent = new EventEditComponent(eventData, event);
    this._eventOffersComponent = new EventOffersComponent(event);
    this._eventDestinationsComponent = new EventDestinationsComponent(event);

    this._eventComponent.setEventRollupButtonClickHandler(() => {
      this._replaceEventToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComponent.setSubmitHandler((evt) => {
      evt.preventDefault();
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    render(
        this._container,
        this._eventComponent,
        RenderPosition.BEFOREEND
    );

    render(
        this._eventEditComponent.getElement(),
        this._eventDetailsComponent,
        RenderPosition.BEFOREEND
    );

    if (event.offers.length !== 0) {
      render(
          this._eventDetailsComponent.getElement(),
          this._eventOffersComponent,
          RenderPosition.BEFOREEND
      );
    }
    if (event.destination.description.length || event.destination.photo.length !== 0) {
      render(
          this._eventDetailsComponent.getElement(),
          this._eventDestinationsComponent,
          RenderPosition.BEFOREEND
      );
    }
  }

  _replaceEventToEdit() {
    replace(this._eventEditComponent, this._eventComponent);
  }

  _replaceEditToEvent() {
    replace(this._eventComponent, this._eventEditComponent);
  }

  _onEscKeyDown(evt) {
    const isEscape = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscape) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
