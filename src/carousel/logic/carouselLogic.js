const maxIndex = 3;
const minIndex = 0;
let slideIndex = 0;

const previous = function previous() {
  slideIndex -= 1;
  
  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  console.log(`Show previous slide: ${slideIndex}`);
};

const next = function next() {
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

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
