const generateEvent = () => {
  return {
    type: `Taxi`,
    startDate: `2019-03-18T09:30`,
    destination: `Amsterdam`,
    eventPrice: 20,
    offerPrice: 20,
    offerDescription: `Order Uber`,
    duration: 30,
    offers: [{
      name: `train`,
      service: `Travel by train`,
      price: 40,
    },
    ]
  };
};

const generateEvents = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateEvent);
};

export {generateEvent, generateEvents};
