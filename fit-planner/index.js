// Inputs
const $currentWeight = document.getElementById('current-weight');
const $goalWeight = document.getElementById('goal-weight');

const $startDate = document.getElementById('start-date');
const $endDate = document.getElementById('end-date');

let weights = [0, 0];
let dates = [new Date(), new Date()];

function setWeight(idx, element) {
  weights[idx] = parseFloat(element.value);
}

$currentWeight.addEventListener('change', (e) => setWeight(0, e.target));
$goalWeight.addEventListener('change', (e) => setWeight(1, e.target));

function setDate(idx, element) {
  const parts = element.value.split('.');
  const day = parts[0];
  const month = parts[1] - 1;
  const year = parts[2];
  dates[idx] = new Date(year, month, day);
}

$startDate.addEventListener('change', (e) => setDate(0, e.target));
$endDate.addEventListener('change', (e) => setDate(1, e.target));

// Creating plan
const $countButton = document.getElementById('count-button');

let kgPerDay, kgPerDayRounded;
let plan = [];
function createPlan() {
  const msInDay = 1000 * 60 * 60 * 24;
  const diffTime = dates[1] - dates[0];
  const diffDays = Math.floor(diffTime / msInDay);
  const diffWeight = weights[0] - weights[1];

  kgPerDay = diffWeight / diffDays;
  kgPerDayRounded = Math.round(kgPerDay * 100 + Number.EPSILON) / 100;

  for (let i = 0, tDate = dates[0], tWeight = weights[0]; tDate < dates[1]; i++) {
    tDate.setDate(tDate.getDate() + 1);
    tWeight -= kgPerDay;
    plan[i] = { d: new Date(tDate.getTime()), w: tWeight };
  }
}

const $avgWeightLoss = document.getElementById('avg-weight-loss');
const $months = document.getElementById('months');
function formatDay(d) {
  const monthsMap = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  return `${d.getDate()} ${monthsMap[d.getMonth()]} ${d.getFullYear()}`;
}

function displayPlan() {
  $avgWeightLoss.textContent = `${kgPerDayRounded} kg/day`;

  let monthsContent = '';
  for (let i = 0; i < plan.length; i++) {
    const day = formatDay(plan[i].d);
    const weight = Math.round(plan[i].w * 100 + Number.EPSILON) / 100;
    monthsContent += `<p>${day} - ${weight}</p>`;
  }
  $months.innerHTML = monthsContent;
}

$countButton.addEventListener('click', () => {
  createPlan();
  displayPlan();
});

