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
    // TODO: read initial data from file
    this.plan = [];

    $acceptPlan.addEventListener('click', this.onPlanAccepted.bind(this));
  }

  onPlanAccepted() {
    this.beginDate = this.parseDate($beginDate);
    this.endDate = this.parseDate($endDate);
    this.beginWeight = this.parseWeight($beginWeight);
    this.endWeight = this.parseWeight($endWeight);
    this.calculatePlan();
    // TODO: save plan to file
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
        weight: this.endWeight - (losePerDay * i),
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