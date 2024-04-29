const maxIndex = 3;
const minIndex = 0;

let slideIndex = 0;
const translateX = [0, -256 * 1, -256 * 2, -256 * 3];

const slideShow = document.querySelector('.slide-show');

const previous = function previous() {
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  slideShow.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const next = function next() {
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  slideShow.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const jump = function jump(index) {
  slideIndex = index;
  slideShow.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const setAutoAdvance = function setTimer(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
