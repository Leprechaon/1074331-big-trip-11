import {generateEventActivities} from "./mock/eventData.js";

const getPreposition = (type) => {
  const types = generateEventActivities();
  return (types.some((it) => {
    return it.name === type;
  }) ? `in` : `to`);
};

const castDateFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

export {getPreposition, getRandomIntegerNumber, castDateFormat, getRandomArrayItem};
