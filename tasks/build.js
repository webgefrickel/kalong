const runSass = require('./sass');
const runSassLint = require('./sassLint');
const runPostcss = require('./postcss');
const config = require('../kalong.config');

const queue = [];

const one = () => {
  console.log('starting one');
  setTimeout(() => {
    console.log('finished one');
  }, 1000);
};

const two = () => {
  console.log('starting two');
  setTimeout(() => {
    console.log('finished two');
  }, 2000);
};

const three = () => {
  console.log('starting three');
  setTimeout(() => {
    console.log('finished three');
  }, 3000);
};

async function runQueue() {
  queue.push(await one());
  queue.push(await two());
  queue.push(await three());
}

runQueue();

runSassLint();

// Build both minified an non-minified versions
runSass();
runSass({
  output: `${config.main}.min.css`,
  sourceMap: false,
});

runPostcss();
runPostcss({
  input: `${config.main}.min.css`,
  sourceMap: false,
});
