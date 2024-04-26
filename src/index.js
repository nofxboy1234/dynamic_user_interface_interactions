import './style.css';

import setupMenus from './dropDownMenu';

import {
  pictureFrame,
  slideShow,
  slide,
  previousButton,
  nextButton,
  jumpCircle,
} from './carousel/components/carouselComponents';

import {
  previous,
  next,
  jump,
  setAutoAdvance,
} from './carousel/logic/carouselLogic';

setupMenus();

setAutoAdvance(3000);
previous();
next();
jump();
