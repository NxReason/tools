import React from 'react';

const Month = ({ name, goals }) => {
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
      <h4 className="month-name">{name}</h4>
      <ul className="month-goals">
        {monthGoals}
      </ul>
    </div>
  );
}

export default Month;
