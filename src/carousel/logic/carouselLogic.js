const maxIndex = 3;
const minIndex = 0;

let slideIndex = 0;
// const translateX = [0, -256 * 1, -256 * 2, -256 * 3, -256 * 4];
const translateDistance = 256;

const slideShowContainer = document.querySelector('#slide-show-container');

const slideShow1 = document.querySelector('#slide-show-1');
const slideShow2 = document.querySelector('#slide-show-2');
const slideShow3 = document.querySelector('#slide-show-3');
const lastSlideShowAppended = slideShow2;

slideShowContainer.addEventListener('transitionend', () => {
  console.log('transitionend');

  if (slideIndex === maxIndex + 1) {
    // const firstSlide = slideShowContainer.firstChild;
    // slideShowContainer.removeChild(firstSlide);
    // slideShowContainer.appendChild(firstSlide);
    // slideShowContainer.lastChild.after(slideShowContainer.firstChild)
    // slideIndex = minIndex;
  }
});

const next = function next() {
  slideIndex += 1;
  const translateValue = `${-1 * slideIndex * translateDistance}px`;
  slideShowContainer.style.translate = translateValue;
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
