const fs = require('fs');
const cla = require('command-line-args');

const planner = require('./planner');

const argsDefinitions = [
  { name: 'begin', alias: 'b', type: String },
  { name: 'end', alias: 'e', type: String },
  { name: 'from', alias: 'f', type: Number },
  { name: 'to', alias: 't', type: Number },
  { name: 'file', type: String }
];
const args = formatArguments(cla(argsDefinitions));

//            ms     sec  min  hour day
const plusMonth = Date.now() + 1000 * 60 * 60 * 24 * 30;
const defaultOptions = {
  begin: new Date(),
  end: new Date(plusMonth),
  file: 'plan.json'
};

const options = Object.assign({}, defaultOptions, args) ;

const plan = planner(options);

fs.writeFileSync(options.file, JSON.stringify(plan));

// helpers
function formatArguments(args) {
  const result = {
    from: args.from,
    to: args.to
  };
  if (args.begin) { result.begin = formatDateArg(args.begin); };
  if (args.end) { result.end = formatDateArg(args.end); };
  if (args.file) { result.file = args.file; }
  return result;
}

function formatDateArg(date) {
  if (!date) { return; }

  date = date.replace(/\//g, '.');
  const parts = date.split('.');

  let year = parseInt(parts[2]);
  if (year < 100) { year += 2000; }
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[0]) + 1;

  return new Date(year, month, day);
}