const maxIndex = 3;
const minIndex = 0;

let slideIndex = 0;
const translateX = [0, -256 * 1, -256 * 2, -256 * 3, -256 * 4];

let slideShowLeft = document.querySelector('.slide-show');
let slideShowRight;
const slideShowContainer = document.querySelector('.slide-show-container');

slideShowContainer.addEventListener('transitionend', () => {
  if (slideIndex <= maxIndex) {
    return;
  }

  slideShowLeft.remove();
  slideShowLeft = slideShowRight;
  slideIndex = minIndex;
});
// }, {capture: true});

const previous = function previous() {
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  slideShowLeft.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const next = function next() {
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    //   Create a copy of slideshow and put it to the right of existing slideshow
    slideShowRight = slideShowLeft.cloneNode(true);
    slideShowRight.id = 'slide-show-right';
    slideShowLeft.after(slideShowRight);
  }

  slideShowContainer.style.translate = `${translateX.at(slideIndex)}px`;
};

const jump = function jump(index) {
  slideIndex = index;
  slideShowLeft.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
};

const setAutoAdvance = function setAutoAdvance(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

export { previous, next, jump, setAutoAdvance };
