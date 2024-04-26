const previous = function previous() {
  console.log('previous()');
};

const next = function next() {
  console.log('next()');
};

const jump = function jump() {
  console.log('jump()');
};

const setAutoAdvance = function setTimer(delay) {
  setTimeout(() => {
    console.log('Delayed for 3 seconds');
  }, delay);
};

export { previous, next, jump, setAutoAdvance };
