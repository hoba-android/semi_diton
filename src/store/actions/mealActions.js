import {
  ADD_MAEL,
  REMOVE_MEAL,
  ADD_WATER,
  ADD_SPORT,
} from '../../consts/types';

export const addMeal = (addedMeal) => {
  return {
    type: ADD_MAEL,
    payload: { items: addedMeal },
  };
};

export const removeMeal = (id) => {
  return {
    type: REMOVE_MEAL,
    payload: { items: id },
  };
};

export const addWater = (cups) => {
  return {
    type: ADD_WATER,
    payload: { items: cups },
  };
};

export const addSport = (sport) => {
  return {
    type: ADD_SPORT,
    payload: { items: sport },
  };
};
