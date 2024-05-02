const maxIndex = 3;
const minIndex = 0;

let slideIndex = 0;
const translateX = [0, -256 * 1, -256 * 2, -256 * 3, -256 * 4];

const slideShowContainer = document.querySelector('#slide-show-container');

const slideShowLeft = document.querySelector('#slide-show-left');
const slideShowRight = document.querySelector('#slide-show-right');
const lastSlideShowAppended = slideShowRight;

const nextSlideShow = function nextSlideShow() {
  let slideShow;
  switch (lastSlideShowAppended) {
    case slideShowLeft:
      slideShow = slideShowRight;
      break;
    case slideShowRight:
      slideShow = slideShowLeft;
      break;
    default:
      break;
  }

  return slideShow;
};

slideShowContainer.addEventListener('transitionend', () => {
  if (slideIndex > maxIndex) {
    slideShowContainer.appendChild(nextSlideShow());
    slideIndex = minIndex;
  }
});

const next = function next() {
  slideIndex += 1;
  slideShowContainer.style.translate = `${translateX.at(slideIndex)}px`;
};

const setAutoAdvance = function setAutoAdvance(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

// const previous = function previous() {
//   slideIndex -= 1;

//   if (slideIndex < minIndex) {
//     slideIndex = maxIndex;
//   }

//   slideShowLeft.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
// };

// const jump = function jump(index) {
//   slideIndex = index;
//   slideShowLeft.style.transform = `translateX(${translateX.at(slideIndex)}px)`;
// };

export { next, setAutoAdvance };
