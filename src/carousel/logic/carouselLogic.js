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

const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');

const slides = [slide0, slide1, slide2, slide3];

let transitionState;

const replaceSlideWithPlaceholderSlide = () => {
  const placeholderSlide = document.createElement('div');
  placeholderSlide.classList.add('slide', 'placeholder-slide');
  slideShow.appendChild(placeholderSlide);
};

const moveLastSlideToEnd = () => {
  if (slideIndex === 0) {
    return;
  }

  const slideToAppend = slides.at(slideIndex - 1);
  slideToAppend.classList.toggle('last-slide');
};

const removeAllPlaceholderSlides = () => {
  const placeholderSlides = document.querySelectorAll('.placeholder-slide');
  placeholderSlides.forEach((element) => {
    element.remove();
  });
};

const resetSlideIndex = () => {
  slideIndex = minIndex;
};

const toggleLastSlideClassOnAllSlides = () => {
  const normalSlides = document.querySelectorAll('.slide');
  normalSlides.forEach((element) => {
    element.classList.toggle('last-slide');
  });
};

const toggleSlideShowTransitionClass = () => {
  slideShow.classList.toggle('slide-show-transition-translate');
};

const translateSlideShow = (value) => {
  slideShow.style.translate = value;
};

slideShow.addEventListener('transitionstart', () => {
  console.log('transitionstart');
  transitionState = 'started';
});

slideShow.addEventListener('transitionend', () => {
  console.log('transitionend');
  transitionState = 'ended';

  moveLastSlideToEnd();
  replaceSlideWithPlaceholderSlide();

  if (slideIndex > maxIndex) {
    removeAllPlaceholderSlides();
    toggleLastSlideClassOnAllSlides();
    resetSlideIndex();

    toggleSlideShowTransitionClass();
    translateSlideShow('0px');
  }
});

const next = function next() {
  if (transitionState === 'started') {
    return;
  }

  slideIndex += 1;

  const translateValue = `${-1 * slideIndex * translateDistance}px`;

  if (slideIndex === 1) {
    toggleSlideShowTransitionClass();
  }
  translateSlideShow(translateValue);
};

const setAutoAdvance = function setAutoAdvance(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

nextButton.addEventListener('click', () => {
  next();
});

previousButton.addEventListener('click', () => {
  console.log('previous');
});

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
