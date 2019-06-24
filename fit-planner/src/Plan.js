const PLAN_FILE_PATH = path.join(__dirname, 'data/plan.json');

const $beginDate = document.getElementById('begin-date');
const $endDate = document.getElementById('end-date');
const $beginWeight = document.getElementById('begin-weight');
const $endWeight = document.getElementById('end-weight');
const $acceptPlan = document.getElementById('accept-plan');

class Plan {
  constructor(view) {
    this.view = view;
    this.beginDate = null;
    this.endDate = null;
    this.beginWeight = null;
    this.endWeight = null;
    this.plan = [];
    fs.readFile(PLAN_FILE_PATH, { encoding: 'UTF-8' }, (err, data) => {
      if (err) { console.error(`Can't read plan file`); }
      this.plan = JSON.parse(data, (k, v) => k === 'date' ? new Date(v) : v);
    });

    $acceptPlan.addEventListener('click', this.onPlanAccepted.bind(this));
  }

  onPlanAccepted() {
    this.beginDate = this.parseDate($beginDate);
    this.endDate = this.parseDate($endDate);
    this.beginWeight = this.parseWeight($beginWeight);
    this.endWeight = this.parseWeight($endWeight);
    this.calculatePlan();
    const planStr = JSON.stringify(this.plan);
    fs.writeFile(PLAN_FILE_PATH, planStr, (err) => {
      if (err) { console.error(`Can't write to plan file`); }
    });
    this.view.update();
  }

  calculatePlan() {
    const diffTime = this.endDate - this.beginDate;
    const day = 24 * 60 * 60 * 1000;
    const diffDays = Math.floor(diffTime / day);
    
    const diffWeight = this.beginWeight - this.endWeight;
    
    const losePerDay = diffWeight / diffDays;
    
    const result = [];
    for (let i = 1; i <= diffDays; i++) {
      result.push({
        date: new Date(this.beginDate.getTime() + day * i),
        weight: this.beginWeight - (losePerDay * i),
      });
    }
    this.plan = result;
  }

  parseDate(input) {
    const parts = input.value.trim().split('.');
    return new Date(
      parseInt(parts[2]),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );
  }
  parseWeight(input) {
    return parseFloat(input.value);
  }
}