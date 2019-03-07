import React from 'react';
import { connect } from 'react-redux';

import { pickMonth } from '../actions';

const Month = ({ id, name, goals, pickMonth }) => {
  const monthGoals = goals.map((goal, index) => {
    return (
      <li key={index} className="month-goal">
        <span className="month-goal-name">{goal}</span>
        <span className="month-goal-delete-btn">x</span>
      </li>
    );
  });
  
  return (
    <div className="month">
      <h4
        onClick={() => { pickMonth(id); }} 
        className="month-name">
        {name}
      </h4>
      <ul className="month-goals">
        {monthGoals}
      </ul>
    </div>
  );
}

export default connect(null, { pickMonth })(Month);
