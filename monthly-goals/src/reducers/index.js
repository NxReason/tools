import { combineReducers } from 'redux';

const titleReducer = (oldTitle = 'Huh', action) => {
  return 'Hello there';
}

const reducers = combineReducers({
  title: titleReducer
});

export default reducers;