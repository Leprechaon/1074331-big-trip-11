import TripCostComponent from "../components/trip-cost.js";
import TripFilterComponent from "../components/trip-filter.js";
import TripInfoComponent from "../components/trip-info.js";
import TripMenuComponent from "../components/trip-menu.js";
import {RenderPosition, render} from "../utils/render.js";

const renderHeader = (container) => {

  const tripControls = container
    .querySelector(`.trip-main__trip-controls`);
  const tripControlsHeader = tripControls
    .querySelector(`.trip-main__trip-controls h2`);
  const tripInfo = new TripInfoComponent();
  render(
      container,
      tripInfo,
      RenderPosition.AFTERBEGIN
  );
  render(
      tripInfo.getElement(),
      new TripCostComponent(),
      RenderPosition.BEFOREEND
  );
  render(
      tripControlsHeader,
      new TripMenuComponent(),
      RenderPosition.AFTEREND
  );
  render(
      tripControls,
      new TripFilterComponent(),
      RenderPosition.BEFOREEND
  );
};


export default class HeaderController {
  constructor(container) {
    this._container = container;
  }

  render() {
    renderHeader(this._container);
  }
}
