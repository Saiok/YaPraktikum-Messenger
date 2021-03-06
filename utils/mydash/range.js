function range(start, end, step, isRight) {
  if (step === 0) return [...new Array(end).keys()].fill(start)
  if (!start && start !== 0 && !end) return;
  if (start === 0 && !end) return [];
  start = start || 0;
  if (!end) {
    end = start;
    start = 0;
  }
  if (!step && step !== 0) {
    step = start < end ? 1 : -1;
  }
  let arr = [];

  if (!isRight) {
    if (start < end) {
      for (let i = start; i < end; i+=step) {
        arr.push(i);
      }
    } else if (start > end) {
      if (step > 0) return [];
      for (let i = start; i > end; i+=step) {
        arr.push(i);
      }
    }
  } else {
    if (start < end) {
      for (let i = end; i > start; i-=step) {
        arr.push(i);
      }
    } else if (start > end) {
      if (step > 0) return [];
      for (let i = end; i < start; i-=step) {
        arr.push(i);
      }
    }
  }

  return arr;
}

module.exports = range;