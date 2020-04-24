import {
  generateEventData,
  generateEventOffers,
  getArrayOfRandomDates
} from "./eventData.js";
import {
  getRandomIntegerNumber,
  getRandomArrayItem,
  castDateFormat
} from "../utils/common.js";
import {MLS_IN_DAY, MLS_IN_HOUR, MLS_IN_MIN} from "../const.js";

const getEventDuration = (start, end) => {
  const duration = end - start;
  const day = Math.floor(duration / MLS_IN_DAY);
  const hours = Math.floor((duration % MLS_IN_DAY) / MLS_IN_HOUR);
  const minutes = Math.floor((duration % MLS_IN_HOUR) / MLS_IN_MIN);

  return `
    ${day > 0 ? castDateFormat(day) + `D` : ``}
    ${hours > 0 ? castDateFormat(hours) + `H` : ``}
    ${castDateFormat(minutes) + `M`}`;
};

const randomDates = getArrayOfRandomDates(40)
  .sort((a, b) => a - b);

const generateEvent = () => {
  const data = generateEventData();
  const {transfers, activities, destinations} = data;

  return {
    type: Math.random() > 0.5 ?
      getRandomArrayItem(transfers).name :
      getRandomArrayItem(activities).name,
    duration: getEventDuration(randomDates[0], randomDates[1]),
    startDate: randomDates.shift(),
    endDate: randomDates.shift(),
    destination: getRandomArrayItem(destinations),
    eventPrice: getRandomIntegerNumber(5, 100),
    offers: generateEventOffers(),
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
