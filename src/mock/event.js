import {generateEventData, generateEventOffers, getArrayOfRandomDates} from "./eventData.js";
import {getRandomIntegerNumber, getRandomArrayItem, castDateFormat} from "../utils.js";

const data = generateEventData();
const {transfers, activities, destinations} = data;

const getEventDuration = (start, end) => {
  const duration = end - start;
  const day = Math.floor(duration / 86400000);
  const hours = Math.floor((duration % 86400000) / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);

  return `${day > 0 ? castDateFormat(day) + `D` : ``} ${hours > 0 ? castDateFormat(hours) + `H` : ``} ${castDateFormat(minutes) + `M`}`;
};

const randomDates = getArrayOfRandomDates(40).sort((a, b) => a - b);

const generateEvent = () => {
  return {
    type: Math.random() > 0.5 ? getRandomArrayItem(transfers).name : getRandomArrayItem(activities).name,
    duration: getEventDuration(randomDates[0], randomDates[1]),
    startDate: randomDates.shift(),
    endDate: randomDates.shift(),
    destination: getRandomArrayItem(destinations),
    eventPrice: getRandomIntegerNumber(5, 100),

    offers: generateEventOffers().filter((it) => it.isChecked),
  };
};

const generateEvents = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateEvent);
};

export {generateEvent, generateEvents};
