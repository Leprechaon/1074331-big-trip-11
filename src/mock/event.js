const Offers = [
  {
    name: `Order Uber`,
    price: `20`,
    checked: false,
  },
  {
    name: `Add luggage`,
    price: `30`,
    checked: false,
  },
  {
    name: `Switch to comfort class`,
    price: `100`,
    checked: false,
  },
  {
    name: `Add meal`,
    price: `15`,
    checked: false,
  },
  {
    name: `Choose seats`,
    price: `5`,
    checked: false,
  },
  {
    name: `Travel by train`,
    price: `40`,
    checked: false,
  },
];

export const generateEvent = () => {

  return {
    eventType: `Taxi`,
    destination: `Amsterdam`,
    startTime: `10:30`,
    endTime: `11:00`,
    price: 20,
    offers: Offers,
  };
};
