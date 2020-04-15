const generateEventTransfers = () => {
  return [{
    name: `Taxi`,
    description: `Taxi to`
  }, {
    name: `Bus`,
    description: `Bus to`
  }, {
    name: `Train`,
    description: `Train to`
  }, {
    name: `Ship`,
    description: `Ship to`
  }, {
    name: `Transport`,
    description: `Transport to`
  }, {
    name: `Drive`,
    description: `Drive to`
  }, {
    name: `Flight`,
    description: `Flight to`
  }];
};

const generateEventActivities = () => {
  return [{
    name: `Check-in`,
    description: `Chek-in in`
  }, {
    name: `Sightseeing`,
    description: `Sightseeing in`
  }, {
    name: `Restaurant`,
    description: `Restaurant to`
  }];
};

const generateEventDestinations = () => {
  return [{
    place: `Amsterdam`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    photo: `http://picsum.photos/248/152?r=${Math.random()}`
  }, {
    place: `Geneva`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    photo: `http://picsum.photos/248/152?r=${Math.random()}`
  }, {
    place: `Chamonix`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    photo: `http://picsum.photos/248/152?r=${Math.random()}`
  }, {
    place: `Saint Petersburg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    photo: `http://picsum.photos/248/152?r=${Math.random()}`
  }];
};

const generateEventOffers = () => {
  return [{
    name: `luggage`,
    service: `Add luggage`,
    price: 30,
    isChecked: true
  }, {
    name: `comfort`,
    service: `Switch to comfort class`,
    price: 100,
    isChecked: true
  }, {
    name: `meal`,
    service: `Add meal`,
    price: 15,
    isChecked: false
  }, {
    name: `seats`,
    service: `Choose seats`,
    price: 5,
    isChecked: false
  }, {
    name: `train`,
    service: `Travel by train`,
    price: 40,
    isChecked: false
  }];
};

const generateEventData = () => {
  return {
    transfers: generateEventTransfers(),
    activities: generateEventActivities(),
    destinations: generateEventDestinations(),
    offers: generateEventOffers()
  };
};

export {generateEventData};
