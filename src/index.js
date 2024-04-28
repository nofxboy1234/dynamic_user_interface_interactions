import './style.css';

import setupMenus from './dropDownMenu';

// import {
//   pictureFrame,
//   slideShow,
//   slide,
//   previousButton,
//   nextButton,
//   jumpCircle,
// } from './carousel/components/carouselComponents';

import {
  previous,
  next,
  jump,
  setAutoAdvance,
} from './carousel/logic/carouselLogic';

setupMenus();

// next();
// next();
// previous();
// jump(3);

setAutoAdvance(1000);
