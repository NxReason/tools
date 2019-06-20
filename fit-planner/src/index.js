const plannerView = new PlannerView();
plannerView.update();

// materialize initialization
document.addEventListener('DOMContentLoaded', function() {
  const $modals = document.querySelectorAll('.modal');
  const modals = M.Modal.init($modals);
});