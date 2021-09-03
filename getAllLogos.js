const testFolder = './public/logos/';
const fs = require('fs');

const logos = [];
fs.readdirSync(testFolder).forEach((file) => {
  logos.push(file);
});
fs.writeFile('input.json', JSON.stringify(logos), (err) => {
  if (err) throw err;
  // console.log('complete');
});
