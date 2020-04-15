import {generateEventActivities} from "./mock/eventData.js";

export const getPreposition = (type) => {
  const types = generateEventActivities();
  return (types.some((it) => {
    return it.name === type;
  }) ? `in` : `to`);
};
