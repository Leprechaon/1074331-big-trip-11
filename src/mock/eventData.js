const generateEventTransfers = () => {
  return [{
    name: `Taxi`
  }, {
    name: `Bus`
  }, {
    name: `Train`
  }, {
    name: `Ship`
  }, {
    name: `Transport`
  }, {
    name: `Drive`
  }, {
    name: `Flight`
  }];
};

const generateEventActivities = () => {
  return [{
    name: `Check-in`
  }, {
    name: `Sightseeing`
  }, {
    name: `Restaurant`
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
    service: `Add luggage`,
    price: 30
  }, {
    service: `Switch to comfort class`,
    price: 100
  }, {
    service: `Add meal`,
    price: 15
  }, {
    service: `Choose seats`,
    price: 5
  }, {
    service: `Travel by train`,
    price: 40
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
