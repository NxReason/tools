import React from 'react';
import { connect } from 'react-redux';

import Month from './Month';

const Months = ({ months }) => {
  const monthsList = months.map(m => {
    return <Month
      key={m.id}
      id={m.id}
      name={m.name}
      goals={m.goals} 
    />
  })
  return <div className="months">{monthsList}</div>;
}

const mapStateToProps = ({ months }) => {
  return { months };
}

export default connect(mapStateToProps)(Months);
