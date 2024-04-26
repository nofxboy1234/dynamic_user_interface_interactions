let slideIndex = 0;

const previous = function previous() {
  slideIndex -= 1;
  console.log(`Show previous slide: ${slideIndex}`);
};

const next = function next() {
  slideIndex += 1;
  console.log(`Show next slide: ${slideIndex}`);
};

const jump = function jump(index) {
  slideIndex = index;
  console.log(`Jump to slide ${index}`);
};

const setAutoAdvance = function setTimer(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
