const { name, version } = require('../package.json');
const config = require('./config');

const start = new Date();
console.log(`application: ${name}`);
console.log(`version: ${version}`);
console.log(`start at: ${start.toISOString()}`);
console.log(`node env: ${config.node.env}`);
