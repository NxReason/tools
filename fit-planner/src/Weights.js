const fs = require('fs');
const path = require('path');

const WEIGHTS_FILE_PATH = path.join(__dirname, 'data/weights.json');

class Weights {
  constructor(view) {
    this.view = view;
    this.weights = {};
    fs.readFile(WEIGHTS_FILE_PATH, { encoding: 'UTF-8' }, (err, data) => {
      if (err) { console.error(`Can't read weights file`); }
      this.weights = JSON.parse(data);
    });
  }

  setWeight(date, weight) {
    if (date instanceof Date) {
      date = date.toDateString();
    }
    this.weights[date] = weight;
    this._save();
  }

  _save() {
    const weightsStr = JSON.stringify(this.weights);
    fs.writeFile(WEIGHTS_FILE_PATH, weightsStr, (err) => {
      if (err) { console.error(`Can't write to weights file`); }
    })
  }
}