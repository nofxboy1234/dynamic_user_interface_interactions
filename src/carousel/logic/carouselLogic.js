const previous = function previous() {
  console.log('Show previous slide');
};

const next = function next() {
  console.log('Show next slide');
};

const jump = function jump(index) {
  console.log(`Jump to slide ${index}`);
};

const setAutoAdvance = function setTimer(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
