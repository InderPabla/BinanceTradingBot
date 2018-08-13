var fs = require('fs');
var stellerHistoral = JSON.parse(fs.readFileSync('StellerHistorical.json', 'utf8'));
console.log(stellerHistoral);
