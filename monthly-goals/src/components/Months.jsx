import React from 'react';

import Month from './Month';

const fakeMonths = [
  { id: "1", name: 'January', goals: [] },
  { id: "2", name: 'February', goals: [] },
  { id: "3", name: 'March', goals: [] },
  { id: "4", name: 'April', goals: ['Some really long goal name and whatnot', 'Some other goal'] },
  { id: "5", name: 'May', goals: [] },
  { id: "6", name: 'June', goals: ['Hey hey monika'] },
  { id: "7", name: 'July', goals: ['I still see bananas in my room'] },
  { id: "8", name: 'August', goals: [`Can't take back the love that i've gave you`] },
  { id: "9", name: 'September', goals: ['So basically I am monkey'] },
  { id: "10", name: 'October', goals: [] },
  { id: "11", name: 'November', goals: ['Bobs or vagan whichever will it be', 'Sit the fuck down t-series', `I'm here to spill the real tea`] },
  { id: "12", name: 'December', goals: [] },
]

const Months = () => {
  const months = fakeMonths.map(m => {
    return <Month key={m.id} name={m.name} goals={m.goals} />
  })
  return <div className="months">{months}</div>;
}

export default Months;
