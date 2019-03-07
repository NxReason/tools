import React from 'react';

import NewGoal from './NewGoal';
import GoalsList from './GoalsList';
import Months from './Months';

const App = () => {
  return (
    <div className="app">
      <div className="left-column">
        <NewGoal />
        <GoalsList />
      </div>
      <Months />
    </div>
  );
}

export default App;
