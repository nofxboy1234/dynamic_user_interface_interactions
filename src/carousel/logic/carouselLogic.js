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
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
