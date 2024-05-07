const minIndex = 0;
const maxIndex = 3;

let slideIndex = 0;
const translateDistance = 256;

const slideShowHolder = document.querySelector('#slide-show-holder');
const slideShow = document.querySelector('#slide-show');

const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');

const slides = [...document.querySelectorAll('.slide')];
const jumpCircles = [...document.querySelectorAll('.jump-circle')];

jumpCircles.at(0).classList.add('jump-circle-filled');

let jumpDifference;

let transitionState;
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

const moveLeftmostOverflowSlidesToEnd = () => {
  const slidesToAppend = slides.splice(0, jumpDifference);
  slides.push(...slidesToAppend);
  setAllSlideOrders();
};

const moveRightmostOverflowSlidesToStart = () => {
  const slidesToPrepend = slides.splice(-1 * jumpDifference);
  slides.unshift(...slidesToPrepend);
  setAllSlideOrders();
};

const addSlideShowTransitionClass = () => {
  slideShow.classList.add('slide-show-transition-translate');
};

const removeSlideShowTransitionClass = () => {
  slideShow.classList.remove('slide-show-transition-translate');
};

const translateSlideShowHolder = (value) => {
  slideShowHolder.style.translate = value;
};

const translateSlideShow = (value) => {
  slideShow.style.translate = value;
};

slideShow.addEventListener('transitionstart', () => {
  transitionState = 'started';
});

slideShow.addEventListener('transitionend', () => {
  transitionState = 'ended';

  if (transitionDirection === 'forwards') {
    moveLeftmostOverflowSlidesToEnd();

    removeSlideShowTransitionClass();

    const translateValue = '0px';
    translateSlideShow(translateValue);
  }

  if (transitionDirection === 'backwards') {
    removeSlideShowTransitionClass();

    let translateValue = '0px';
    translateSlideShowHolder(translateValue);

    translateValue = '0px';
    translateSlideShow(translateValue);
  }
});

const toggleCircle = function toggleCircle(circleIndex) {
  jumpCircles.at(circleIndex).classList.toggle('jump-circle-filled');
};

const next = function next() {
  if (transitionState === 'started') {
    return;
  }

  jumpDifference = 1;
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
  if (transitionState === 'started') {
    return;
  }

  jumpDifference = 1;
  moveRightmostOverflowSlidesToStart();

  const translateValue = `${-1 * translateDistance}px`;
  translateSlideShowHolder(translateValue);
};

const previous = function previous() {
  if (transitionState === 'started') {
    return;
  }

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${1 * translateDistance}px`;
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

const jumpForwards = function jumpForwards(targetIndex) {
  if (transitionState === 'started') {
    return;
  }

  transitionDirection = 'forwards';
  toggleCircle(slideIndex);
  slideIndex = targetIndex;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${-1 * jumpDifference * translateDistance}px`;
  translateSlideShow(translateValue);
};

const jumpBackwards = function jumpBackwards(targetIndex) {
  if (transitionState === 'started') {
    return;
  }

  moveRightmostOverflowSlidesToStart();

  let translateValue = `${-1 * jumpDifference * translateDistance}px`;
  translateSlideShowHolder(translateValue);

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex = targetIndex;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  translateValue = `${1 * jumpDifference * translateDistance}px`;
  translateSlideShow(translateValue);
};

const jump = function jump(targetIndex) {
  const indexDifference = targetIndex - slideIndex;
  const direction = Math.sign(indexDifference);
  jumpDifference = Math.abs(indexDifference);

  if (direction === 0) {
    return;
  }

  if (direction < 0) {
    jumpBackwards(targetIndex);
  }

  if (direction > 0) {
    jumpForwards(targetIndex);
  }
};

jumpCircles.forEach((circle, circleIndex) => {
  circle.addEventListener('click', () => {
    // toggleCircle(slideIndex);
    // toggleCircle(circleIndex);

    jump(circleIndex);
  });
});

export { setAutoAdvance };
