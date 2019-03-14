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

function pickedGoal(state = null, action) {
  switch (action.type) {
    case 'PICK_GOAL':
      return action.payload;
    case 'REMOVE_GOAL':
      if (state && action.payload.id === state.id) { return null; }
      return state;
  }
  return state;
}


const monthsDefault = [
  { id: 1, name: 'January', goals: [] },
  { id: 2, name: 'February', goals: [] },
  { id: 3, name: 'March', goals: [] },
  { id: 4, name: 'April', goals: [] },
  { id: 5, name: 'May', goals: [] },
  { id: 6, name: 'June', goals: [] },
  { id: 7, name: 'July', goals: [] },
  { id: 8, name: 'August', goals: [] },
  { id: 9, name: 'September', goals: [] },
  { id: 10, name: 'October', goals: [] },
  { id: 11, name: 'November', goals: [] },
  { id: 12, name: 'December', goals: [] }
];

function months(state = monthsDefault, action) {
  return state;
}

const reducers = (state = {}, action) => {
  if (action.type === 'PICK_MONTH' && state.pickedGoal) {
    const newGoals = state.goals.filter(g => g.id !== state.pickedGoal.id);
    const pickedMonth = state.months.find(m => m.id === action.payload.id);
    const pickedMonthNewGoals = [...pickedMonth.goals, state.pickedGoal.name];
    const newMonths = state.months.map(m => {
      if (m === pickedMonth) { return { id: m.id, name: m.name, goals: pickedMonthNewGoals }; }
      return m;
    });
    const result = {
      goals: newGoals,
      months: newMonths,
      pickedGoal: null
    };
    return result;
  } 

  const result = {
    goals: goals(state.goals, action),
    months: months(state.months, action),
    pickedGoal: pickedGoal(state.pickedGoal, action)
  };
  return {
    goals: goals(state.goals, action),
    months: months(state.months, action),
    pickedGoal: pickedGoal(state.pickedGoal, action)
  }
}

export default reducers;