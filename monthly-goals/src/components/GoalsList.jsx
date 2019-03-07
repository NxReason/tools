import React from 'react';
import { connect } from 'react-redux';

import Goal from './Goal';

const GoalsList = ({ goals }) => {
  const list = goals.map(goal => {
    return <Goal
      key={goal.id}
      id={goal.id}
      name={goal.name}
    />
  });

  return <div className="goals-list">{list}</div>; 
}

function mapStateToProps({ goals }) {
  return { goals };
}

export default connect(mapStateToProps)(GoalsList);
