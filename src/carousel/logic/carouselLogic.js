const minIndex = 0;
const maxIndex = 3;

let slideIndex = 0;
const translateDistance = 256;
const slideShow = document.querySelector('#slide-show');

const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');

const slides = [...document.querySelectorAll('.slide')];
const jumpCircles = [...document.querySelectorAll('.jump-circle')];

jumpCircles.at(0).classList.add('jump-circle-filled');

// let transitionState;
let transitionDirection;

// const addPlaceholderSlideToStart = () => {
//   const placeholderSlide = document.createElement('div');
//   placeholderSlide.classList.add('slide', 'placeholder-slide-start');
//   slideShow.appendChild(placeholderSlide);
// };

// const addPlaceholderSlideToEnd = () => {
//   const placeholderSlide = document.createElement('div');
//   placeholderSlide.classList.add('slide', 'placeholder-slide-end');
//   slideShow.appendChild(placeholderSlide);
// };

const setAllSlideOrders = function setAllSlideOrders() {
  slides.forEach((slide, index) => {
    slide.style.order = `${index}`;
  });
};

setAllSlideOrders();

const moveLeftOverflowSlideToEnd = () => {
  const slideToAppend = slides.shift();
  slides.push(slideToAppend);
  setAllSlideOrders();
};

const moveRightOverflowSlideToStart = () => {
  const slideToPrepend = slides.pop();
  slides.unshift(slideToPrepend);
  setAllSlideOrders();
};

// const moveRightOverflowSlideToStart = () => {
//   if (slideIndex === 3) {
//     return;
//   }

//   const slideToPrepend = slides.at(-1);
//   slideToPrepend.classList.toggle('first-slide');
// };

// const removeAllPlaceholderSlides = () => {
//   const placeholderSlides = document.querySelectorAll(
//     '.placeholder-slide-start',
//   );
//   placeholderSlides.forEach((element) => {
//     element.remove();
//   });
// };

// const resetSlideIndex = () => {
//   slideIndex = minIndex;
// };

// const toggleLastSlideClassOnAllSlides = () => {
//   const normalSlides = document.querySelectorAll('.slide');
//   normalSlides.forEach((element) => {
//     element.classList.toggle('last-slide');
//   });
// };

// const toggleSlideShowTransitionClass = () => {
//   slideShow.classList.toggle('slide-show-transition-translate');
// };

const addSlideShowTransitionClass = () => {
  slideShow.classList.add('slide-show-transition-translate');
};

const removeSlideShowTransitionClass = () => {
  slideShow.classList.remove('slide-show-transition-translate');
};

const translateSlideShow = (value) => {
  slideShow.style.translate = value;
};

// slideShow.addEventListener('transitionstart', () => {
//   console.log('transitionstart');
//   transitionState = 'started';
// });

slideShow.addEventListener('transitionend', () => {
  // transitionState = 'ended';

  if (transitionDirection === 'forwards') {
    moveLeftOverflowSlideToEnd();

    removeSlideShowTransitionClass();
    const translateValue = '0px';
    translateSlideShow(translateValue);
  }

  if (transitionDirection === 'backwards') {
    removeSlideShowTransitionClass();
    // const translateValue = '0px';
    // translateSlideShow(translateValue);
  }
});

const toggleCircle = function toggleCircle(circleIndex) {
  jumpCircles.at(circleIndex).classList.toggle('jump-circle-filled');
};

const next = function next() {
  // if (transitionState === 'started') {
  //   return;
  // }

  transitionDirection = 'forwards';
  toggleCircle(slideIndex);
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${-1 * translateDistance}px`;
  translateSlideShow(translateValue);
};

const setupPrevious = function setupPrevious() {
  moveRightOverflowSlideToStart();

  const translateValue = `${-1 * translateDistance}px`;
  translateSlideShow(translateValue);
};

const previous = function previous() {
  // if (transitionState === 'started') {
  //   return;
  // }

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${0 * translateDistance}px`;
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
  setupPrevious();
});

previousButton.addEventListener('click', () => {
  previous();
});

const jump = function jump(index) {
  slideIndex = index;

  const translateValue = `${-1 * slideIndex * translateDistance}px`;

  translateSlideShow(translateValue);
};

jumpCircles.forEach((circle, circleIndex) => {
  circle.addEventListener('click', () => {
    toggleCircle(slideIndex);
    slideIndex = circleIndex;
    toggleCircle(slideIndex);

    jump(circleIndex);
  });
});

export { setAutoAdvance };
