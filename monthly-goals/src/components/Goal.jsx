import React from 'react';
import { connect } from 'react-redux';

import { removeGoal } from '../actions';

const Goal = ({ name, id, removeGoal }) => {
  return (
    <div className="goal">
      <p className="goal-name">{name}</p>
      <span 
        onClick={() => removeGoal(id)}
        className="goal-delete-btn">
        x
      </span>
    </div>
  );
}

export default connect(null, { removeGoal })(Goal);
