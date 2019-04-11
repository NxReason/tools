class PlannerView {
  constructor() {
    this.weights = {};
    this.plan = {};
  }

  render() {
    // console.log('rerendering');
    // console.log(this.plan);
    // console.log(this.weights);
  }

  setPlan(plan) {
    this.plan = plan;
    this.render();
  }

  setWeights(weights) {
    this.weights = weights;
    this.render();
  }
}

const plannerView = new PlannerView();