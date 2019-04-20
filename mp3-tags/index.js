const fs = require('fs');
const cli = require('command-line-args');
const downloadsFolder = require('downloads-folder');
const id3 = require('node-id3');

const defaultOptions = { path: downloadsFolder() };

const cliDefinitions = [
  { name: 'path', alias: 'p', type: String }
];
const cliOptions = cli(cliDefinitions);

const options = Object.assign({}, defaultOptions, cliOptions);
const { path } = options;

try {
  fs.accessSync(path);
}
catch (e) {
  console.log(e.message);
  process.exit(1);
}

const filePaths = fs.readdirSync(path);
const musicFiles = filePaths.filter(fp => {
  const parts = fp.split('.');
  return parts[parts.length - 1] === 'mp3';
});

musicFiles.forEach(file => {
  const fullPath = `${path}/${file}`;
  id3.read(fullPath, (err, tags) => {
    if (err) {
      console.log(`can't read id3 tags of file: ${file}`);
      return;
    }
    // tags already exist
    if (tags.title && tags.artist) {
      console.log('tags already exist');
      return;
    }

    // need to add tags
    const parts = file.split('-');
    if (parts.length > 2) {
      console.log(`can't get artist & title from file: ${file}, too many dashes`);
      return;
    }
    if (parts.length < 1) {
      console.log(`can't get artist & title from file: ${file}, no dashes in file name`);
    }
    const artist = parts[0].trim();
    const title = getTitle(parts[1]);

    let newTags = { artist, title };
    const success = id3.update(newTags, fullPath);
  });
});

function getTitle(titleWithExt) {
  const parts = titleWithExt.split('.');
  return parts.slice(0, parts.length - 1).join('.').trim();
}