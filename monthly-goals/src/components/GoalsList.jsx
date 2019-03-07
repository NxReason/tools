import React from 'react';

import Goal from './Goal';

const fakeGoals = [
  { id: 1, name: 'Hey hey monika' },
  { id: 2, name: 'Hey pa dig monika' },
  { id: 3, name: 'Skrattat du' },
  { id: 4, name: 'Super long goal name to test how it will look on the page, maybe i should even do it like 3 lines or something. i do not think anybody will make such a long goal name but just in case'}
];

const GoalsList = () => {
  const list = fakeGoals.map(goal => {
    return <Goal key={goal.id} name={goal.name} />
  });

  return <div className="goals-list">{list}</div>; 
}

export default GoalsList;
