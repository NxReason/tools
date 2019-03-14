const planner = ({ begin, end, from, to }) => {
  const diffTime = end - begin;
  const day = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor(diffTime / day);
  
  const diffWeight = from - to;
  
  const losePerDay = diffWeight / diffDays;
  
  const result = [];
  for (let i = 1; i <= diffDays; i++) {
    result.push({
      date: new Date(begin.getTime() + day * i),
      weight: from - (losePerDay * i),
      actual: ''
    });
  }
  return result;
}

module.exports = planner;