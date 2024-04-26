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

import { previous, next, jump, setTimer } from './carousel/logic/carouselLogic';

setupMenus();
previous();
