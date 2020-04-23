import TripCostComponent from "../components/trip-cost.js";
import TripFilterComponent from "../components/trip-filter.js";
import TripInfoComponent from "../components/trip-info.js";
import TripMenuComponent from "../components/trip-menu.js";
import {RenderPosition, render} from "../utils/render.js";

export default class HeaderController {
  constructor(container) {
    this._container = container;
    this._tripInfo = new TripInfoComponent();
    this._tripCost = new TripCostComponent();
    this._tripMenu = new TripMenuComponent();
    this._tripFilter = new TripFilterComponent();
  }

  render() {
    const tripControls = this._container
        .querySelector(`.trip-main__trip-controls`);
    const tripControlsHeader = tripControls
        .querySelector(`.trip-main__trip-controls h2`);

    render(
        this._container,
        this._tripInfo,
        RenderPosition.AFTERBEGIN
    );
    render(
        this._tripInfo.getElement(),
        this._tripCost,
        RenderPosition.BEFOREEND
    );
    render(
        tripControlsHeader,
        this._tripMenu,
        RenderPosition.AFTEREND
    );
    render(
        tripControls,
        this._tripFilter,
        RenderPosition.BEFOREEND
    );
  }
}
