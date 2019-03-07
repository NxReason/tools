import React from 'react';

const Goal = ({ name }) => {
  return (
    <div className="goal">
      <p className="goal-name">{name}</p>
      <span className="goal-delete-btn">x</span>
    </div>
  );
}

export default Goal;
