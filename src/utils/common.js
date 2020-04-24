import {generateEventActivities} from "../mock/eventData.js";
import {MLS_IN_DAY, MLS_IN_HOUR, MLS_IN_MIN, MONTH_NAMES} from "../const.js";

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

const castEventDuration = (duration) => {
  const day = Math.floor(duration / MLS_IN_DAY);
  const hours = Math.floor((duration % MLS_IN_DAY) / MLS_IN_HOUR);
  const minutes = Math.floor((duration % MLS_IN_HOUR) / MLS_IN_MIN);

  return `
    ${day > 0 ? castDateFormat(day) + `D` : ``}
    ${hours > 0 ? castDateFormat(hours) + `H` : ``}
    ${castDateFormat(minutes) + `M`}`;
};

const createEventGroups = (events) => {
  let dayCounter = 0;
  let prevDate = 0;

  return events.reduce((eventDate, event) => {
    const date = event.startDate.getDate();
    if (date !== prevDate) {
      dayCounter++;
      eventDate[dayCounter] = [];
    }
    eventDate[dayCounter].push(event);
    prevDate = date;
    return eventDate;
  }, []);
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

export {
  castDateFormat,
  castDateTripDayFormat,
  castEventDuration,
  createEventGroups,
  formatDateTrip,
  formatTimeEvent,
  formatTimeEventEdit,
  getPreposition,
  getRandomArrayItem,
  getRandomIntegerNumber,
};
