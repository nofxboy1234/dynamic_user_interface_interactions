import './style.css';

// import setupMenus from './dropDownMenu';

// import {
//   pictureFrame,
//   slideShow,
//   slide,
//   previousButton,
//   nextButton,
//   jumpCircle,
// } from './carousel/components/carouselComponents';

// import {
//   previous,
//   next,
//   jump,
//   setAutoAdvance,
// } from './carousel/logic/carouselLogic';

// setupMenus();
// setAutoAdvance(1000);

const outer = document.querySelector('#outer');
// outer.addEventListener('click', log);
outer.addEventListener('click', log, { capture: true });

const inner1 = document.querySelector('#inner-1');
inner1.addEventListener('click', log);

const inner2 = document.querySelector('#inner-2');
const inner3 = document.querySelector('#inner-3');

function log(event) {
  console.log('\n');
  console.log('**************');
  console.log('event.target:');
  console.log(event.target);
  console.log('##############');
  console.log('event.currentTarget:');
  console.log(event.currentTarget);
  console.log('##############');
  console.log('this:');
  console.log(this);
  console.log('**************');

  // if (this === outer) {
  //   event.stopPropagation();
  // }
  // event.stopPropagation();
}

function log2(event) {
  console.log('log2!');
}
