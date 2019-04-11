const weights = new Weights();
const plan = new Plan();

const dateWeightData = {

}

const planData = {
  
}

// materialize initialization
const setCurrentDatepickerOptions = {
  defaultDate: new Date(),
  setDefaultDate: true
};

const beginDatepickerOptions = {
  defaultDate: new Date(),
  setDefaultDate: true
};

const now = Date.now();
const month = 1000 * 60 * 60 * 24 * 30;
const endDatepickerOptions = {
  defaultDate: new Date(now + month),
  setDefaultDate: true
};

document.addEventListener('DOMContentLoaded', function() {
  const $modals = document.querySelectorAll('.modal');
  const modals = M.Modal.init($modals);

  const $setCurrentDatePicker = document.getElementById('set-current-date');
  const setCurrentDatepicker = M.Datepicker.init(
    $setCurrentDatePicker, 
    setCurrentDatepickerOptions
  );
  console.log(setCurrentDatepicker.date);
});