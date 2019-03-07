import React from 'react';
import { connect } from 'react-redux';

import { removeGoal, pickGoal } from '../actions';

const Goal = ({ id, name, removeGoal, pickedGoal, pickGoal }) => {
  let picked = '';
  if (pickedGoal) {
    picked = pickedGoal.id === id ? 'picked' : '';
  }

  return (
    <div
      onClick={(e) => { pickGoal({ id, name }); e.stopPropagation(); }}
      className={`goal ${picked}`}>
      <p className="goal-name">{name}</p>
      <span 
        onClick={(e) => { removeGoal(id); e.stopPropagation(); }}
        className="goal-delete-btn">
        x
      </span>
    </div>
  );
}

const mapStateToProps = ({ pickedGoal }) => ({ pickedGoal });

export default connect(mapStateToProps, { removeGoal, pickGoal })(Goal);
