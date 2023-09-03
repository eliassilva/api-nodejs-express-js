require('dotenv').config({ path: './test.env' });

module.exports = {
  node: {
    env: process.env.NODE_ENV,
  },
};
