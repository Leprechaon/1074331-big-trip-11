import {generateEventData, generateEventOffers, getArrayOfRandomDates} from "./eventData.js";
import {getRandomIntegerNumber} from "../utils.js";

const data = generateEventData();
const {transfers, activities, destinations} = data;

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const randomDates = getArrayOfRandomDates(40).sort((a, b) => a - b);

const generateEvent = () => {
  return {
    type: Math.random() > 0.5 ? getRandomArrayItem(transfers).name : getRandomArrayItem(activities).name,
    startDate: randomDates.shift(),
    endDate: randomDates.shift(),
    destination: getRandomArrayItem(destinations).place,
    eventPrice: getRandomIntegerNumber(5, 100),
    duration: 30,
    offers: generateEventOffers().filter((it) => it.isChecked)
  };
};

const generateEvents = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateEvent);
};

export {generateEvent, generateEvents};
