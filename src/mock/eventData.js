import {getRandomIntegerNumber, getRandomArrayItem} from "../utils";

const generateBoolean = () => {
  return Math.random() > 0.5;
};

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const generateEventTransfers = () => {
  return [{
    name: `Taxi`,
  }, {
    name: `Bus`,
  }, {
    name: `Train`,
  }, {
    name: `Ship`,
  }, {
    name: `Transport`,
  }, {
    name: `Drive`,
  }, {
    name: `Flight`,
  }];
};

const generateEventActivities = () => {
  return [{
    name: `Check-in`,
  }, {
    name: `Sightseeing`,
  }, {
    name: `Restaurant`,
  }];
};

const getDestinationsDescription = () => {
  return getRandomArrayItem(descriptions);
};

const generateDestinationsDescriptions = () => {
  return new Array(getRandomIntegerNumber(0, 5)).fill(``).map(getDestinationsDescription).join(`\n`);
};

const getPhoto = () => {
  return `http://picsum.photos/248/152?r=${Math.random()}`;
};

const getPhotoAlbum = () => {
  return new Array(getRandomIntegerNumber(0, 5)).fill(``).map(getPhoto);
};

const generateEventDestinations = () => {
  return [{
    place: `Amsterdam`,
    description: generateDestinationsDescriptions(),
    photo: getPhotoAlbum(),
  }, {
    place: `Geneva`,
    description: `Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.`,
    photo: getPhotoAlbum(),
  }, {
    place: `Chamonix`,
    description: generateDestinationsDescriptions(),
    photo: getPhotoAlbum(),
  }, {
    place: `Saint Petersburg`,
    description: generateDestinationsDescriptions(),
    photo: getPhotoAlbum(),
  }];
};

const generateEventOffers = () => {
  return [
    generateBoolean() ? {
      name: `luggage`,
      service: `Add luggage`,
      price: 30,
      isChecked: generateBoolean(),
    } : ``,
    generateBoolean() ? {
      name: `comfort`,
      service: `Switch to comfort class`,
      price: 100,
      isChecked: generateBoolean(),
    } : ``,
    generateBoolean() ? {
      name: `meal`,
      service: `Add meal`,
      price: 15,
      isChecked: generateBoolean(),
    } : ``,
    generateBoolean() ? {
      name: `seats`,
      service: `Choose seats`,
      price: 5,
      isChecked: generateBoolean()
    } : ``,
    generateBoolean() ? {
      name: `train`,
      service: `Travel by train`,
      price: 40,
      isChecked: generateBoolean()
    } : ``].filter((it) => {
    return it !== ``;
  });
};

const generateEventData = () => {
  return {
    transfers: generateEventTransfers(),
    activities: generateEventActivities(),
    destinations: generateEventDestinations(),
    offers: generateEventOffers()
  };
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 10000);
  targetDate.setMinutes(targetDate.getMinutes() + diffValue);

  return targetDate;
};

const getArrayOfRandomDates = (count) => {
  return new Array(count)
  .fill(``)
  .map(getRandomDate);
};

export {generateEventData, generateEventActivities, generateEventOffers, getArrayOfRandomDates};
