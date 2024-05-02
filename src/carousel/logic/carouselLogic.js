const minIndex = 0;
const maxIndex = 3;

let slideIndex = 0;
// const translateX = [0, -256 * 1, -256 * 2, -256 * 3, -256 * 4];
const translateDistance = 256;
const slideShow = document.querySelector('#slide-show');

const slide0 = document.querySelector('#slide-0');
const slide1 = document.querySelector('#slide-1');
const slide2 = document.querySelector('#slide-2');
const slide3 = document.querySelector('#slide-3');

const slides = [slide0, slide1, slide2, slide3];

slideShow.addEventListener('transitionend', () => {
  console.log('transitionend');

  // const slideToAppend = slideShow.firstElementChild;
  const slideToAppend = slides.at(slideIndex - 1);
  slideToAppend.classList.toggle('last-slide');

  const placeholderSlide = document.createElement('div');
  placeholderSlide.classList.add('slide', 'placeholder-slide');
  slideShow.appendChild(placeholderSlide);

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;

    const placeholderSlides = document.querySelectorAll('.placeholder-slide');
    placeholderSlides.forEach((element) => {
      element.remove();
    });

    const normalSlides = document.querySelectorAll('.slide');
    normalSlides.forEach((element) => {
      element.classList.toggle('last-slide');
    });

    slideShow.style.translate = '0px';
  }
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
