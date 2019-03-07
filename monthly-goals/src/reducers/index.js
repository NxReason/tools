import { combineReducers } from 'redux';

function goals(state = [], action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return [...state, action.payload];
    case 'REMOVE_GOAL':
      return state.filter(goal => goal.id !== action.payload.id);
    default:
      return state;
  }
}

function months(state = [], action) {
  return state;
}

const reducers = combineReducers({
  goals,
  months
});

export default reducers;