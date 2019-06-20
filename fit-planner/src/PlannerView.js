const $container = document.getElementById('plan');

const template = `
  

`;

class PlannerView {
  constructor() {
    this.weights = new Weights(this);
    this.plan = new Plan(this);
  }

  render() {
    const months = this.splitPlanToMonths();
    $container.innerHTML = '';
    months.forEach(this.renderMonth);
  }

  renderMonth(month) {
    let tableRows = month.days.map(d => {
      // TODO: check if have a weight data for this day
      let weight = '';
      return `<tr>
        <td>${d.date.getDate()}</td>
        <td>${d.weight.toFixed(1)}</td>
        <td contenteditable="true">${weight}</td>
      </tr>`
    }).join('\n');

    let content = `
    <h4 class="plan-month-name">${month.name}</h4>
    <table class="plan-table">
      <thead>
        <tr>
            <th>Day</th>
            <th>Goal</th>
            <th>Actual</th>
        </tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>`

    const $wrapper = document.createElement('div');
    $wrapper.classList.add('plan-month');
    $wrapper.innerHTML = content;
    $container.appendChild($wrapper);
  }

  update() {
    this.render();
  }

  splitPlanToMonths() {
    const { plan } = this.plan;
    const monthsMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const months = [];
    const month = { name: '', days: [] };
    plan.forEach((day, index) => {
      const dayIndex = day.date.getDate();
      // push completed month to result array
      if (dayIndex === 1 && index !== 0) {
        months.push({ name: month.name, days: [...month.days] });
      }
      // reset month name & days
      if (dayIndex === 1 || index === 0) {
        const monthIndex = day.date.getMonth();
        month.name = monthsMap[monthIndex];
        month.days = [];
      }
      month.days.push(day);
      // push last month even if not full
      if (index === plan.length - 1) {
        months.push({ name: month.name, days: [...month.days] });
      }
    });

    return months;
  }
}
