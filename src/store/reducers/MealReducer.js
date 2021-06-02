import MEALS from '../../data/dummyMeals';
import SPORTS from '../../data/dummySports';
import WATER from '../../data/dummyWater';

import {
  ADD_MAEL,
  REMOVE_MEAL,
  ADD_WATER,
  ADD_SPORT,
} from '../../consts/types';

const initialState = {
  allMeals: MEALS,
  userMeals: [],
  waterCups: WATER,
  sports: SPORTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAEL:
      const addedMeal = action.payload.items;
      return {
        ...state,
        userMeals: state.userMeals.concat(addedMeal),
      };

    case REMOVE_MEAL:
      const rmovedMealId = action.payload.items;
      return {
        ...state,
        userMeals: state.userMeals.filter(
          (element) => element.id !== rmovedMealId
        ),
      };

    case ADD_WATER:
      const cups = action.payload.items;
      return {
        ...state,
        waterCups: state.waterCups.concat(cups),
      };

    case ADD_SPORT:
      const addedSport = action.payload.items;
      return {
        ...state,
        sports: state.sports.concat(addedSport),
      };

    default:
      return state;
  }
};
