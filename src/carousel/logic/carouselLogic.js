const maxIndex = 3;
const minIndex = 0;

let slideIndex = 0;
const translateX = [0, -256, -256 * 2, -256 * 3];

const previous = function previous() {
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  const slideShow = document.querySelector('.slide-show');
  slideShow.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const next = function next() {
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  const slideShow = document.querySelector('.slide-show');
  slideShow.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const jump = function jump(index) {
  slideIndex = index;
  console.log(`Jump to slide ${index}`);
};

const setAutoAdvance = function setTimer(delay) {
  const intervalID = setInterval(() => {
    // next();
    previous()
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
