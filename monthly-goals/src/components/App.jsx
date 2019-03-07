import React from 'react';

import AddGoal from './AddGoal';
import GoalsList from './GoalsList';
import Months from './Months';

const App = () => {
  return (
    <div>
      <AddGoal />
      <GoalsList />
      <Months />
    </div>
  );
}

export default App;
