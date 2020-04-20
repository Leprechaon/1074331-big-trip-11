import {generateEventActivities} from "./mock/eventData.js";
import {MONTH_NAMES} from "./const.js";

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`,
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getPreposition = (type) => {
  const types = generateEventActivities();
  return (types.some((it) => {
    return it.name === type;
  }) ? `in` : `to`);
};

const castDateFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const castDateTripDayFormat = (date) => {
  const month = MONTH_NAMES[
    parseInt(castDateFormat(date.getMonth()), 10)
  ];
  const day = castDateFormat(date.getDate());

  return `${month} ${day}`;
};

const formatTimeEvent = (date) => {
  const year = date.getFullYear();
  const month = castDateFormat(date.getMonth() + 1);
  const day = castDateFormat(date.getDate());
  const hours = castDateFormat(date.getHours());
  const minutes = castDateFormat(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const formatTimeEventEdit = (date) => {

  const year = date.getFullYear() - 2000;
  const month = castDateFormat(date.getMonth() + 1);
  const day = castDateFormat(date.getDate());
  const hours = castDateFormat(date.getHours());
  const minutes = castDateFormat(date.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const formatDateTrip = (date) => {
  const year = date.getFullYear();
  const month = castDateFormat(date.getMonth() + 1);
  const day = castDateFormat(date.getDate());

  return `${year}-${month}-${day}`;
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN: container.prepend(element);
      break;
    case RenderPosition.BEFOREEND: container.append(element);
      break;
    case RenderPosition.AFTEREND: container.after(element);
  }
};

export {
  castDateFormat,
  castDateTripDayFormat,
  createElement,
  formatDateTrip,
  formatTimeEvent,
  formatTimeEventEdit,
  getPreposition,
  getRandomArrayItem,
  getRandomIntegerNumber,
  RenderPosition,
  render,
};
