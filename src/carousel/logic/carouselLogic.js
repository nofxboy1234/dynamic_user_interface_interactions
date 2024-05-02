const minIndex = 0;
const maxIndex = 3;

let slideIndex = 0;
// const translateX = [0, -256 * 1, -256 * 2, -256 * 3, -256 * 4];
const translateDistance = 256;

const slideShow = document.querySelector('#slide-show');

slideShow.addEventListener('transitionend', () => {
  console.log('transitionend');

  // const firstSlide = slideShowContainer.firstChild;
  // slideShowContainer.removeChild(firstSlide);
  // slideShowContainer.appendChild(firstSlide);
  // slideShowContainer.lastChild.after(slideShowContainer.firstChild)
  // slideIndex = minIndex;
});

const next = function next() {
  slideIndex += 1;
  const translateValue = `${-1 * slideIndex * translateDistance}px`;
  slideShow.style.translate = translateValue;
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
