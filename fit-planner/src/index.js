const plannerView = new PlannerView();
setTimeout(() => {
  plannerView.update();
}, 1000);

// materialize initialization
document.addEventListener('DOMContentLoaded', function() {
  const $modals = document.querySelectorAll('.modal');
  const modals = M.Modal.init($modals);
});