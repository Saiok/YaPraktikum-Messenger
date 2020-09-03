const range = require('range')

function rangeRight(start, end, step) {
  if (!end) {
    end = start;
    start = 0;
  }
  if (!step && step !== 0) {
    step = start < end ? 1 : -1;
  }
  return range(start, end, step, true);
}

module.exports = rangeRight;
