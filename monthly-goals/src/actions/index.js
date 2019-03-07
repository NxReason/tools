const uuid = require('uuid/v1');

// action creators
export function addGoal(name) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id: uuid(),
      name
    }
  }
}

export function removeGoal(id) {
  return {
    type: 'REMOVE_GOAL',
    payload: { id }
  }
}

export function pickGoal({ id, name }) {
  return {
    type: 'PICK_GOAL',
    payload: { id, name }
  }
}

export function pickMonth(id) {
  return {
    type: 'PICK_MONTH',
    payload: { id }
  }
}