import {
  generateEventData,
  generateEventOffers,
  getArrayOfRandomDates
} from "./eventData.js";
import {
  getRandomIntegerNumber,
  getRandomArrayItem,
} from "../utils/common.js";


const getEventDuration = (start, end) => {
  return end - start;
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
