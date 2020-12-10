/* eslint-disable max-len */
'use strict';

let position = 0;
let position2 = 0;
const slidersToShow = 4;
const slidersToScroll = 1;
const itemMargin = 20;
const track = document.querySelector('.slider-track');
const track2 = document.querySelector('.slider2-track');
const items = document.querySelectorAll('.slider-item');
const items2 = document.querySelectorAll('.slider2-item');
const btnPrev = document.querySelector('.slider__btn-prev');
const btnNext = document.querySelector('.slider__btn-next');
const btnPrev2 = document.querySelector('.slider2__btn-prev');
const btnNext2 = document.querySelector('.slider2__btn-next');
const itemsCount = items.length;
const itemsCount2 = items2.length;
const itemWidth = document.querySelector('.slider-item').clientWidth;
const itemWidth2 = document.querySelector('.slider2-item').clientWidth;
const movePosition = slidersToScroll * (itemWidth + itemMargin);
const movePosition2 = slidersToScroll * (itemWidth2 + itemMargin);

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidersToShow * (itemWidth + itemMargin)) / (itemWidth + itemMargin);

  position -= itemsLeft >= slidersToScroll
    ? movePosition
    : itemsLeft * (itemWidth + itemMargin);

  setPosition();
  checkBtns();
});

btnNext2.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position2) + slidersToShow * (itemWidth2 + itemMargin)) / (itemWidth + itemMargin);

  position2 -= itemsLeft >= slidersToScroll
    ? movePosition2
    : itemsLeft * (itemWidth2 + itemMargin);

  setPosition2();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidersToScroll
    ? movePosition
    : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev2.addEventListener('click', () => {
  const itemsLeft = Math.abs(position2) / itemWidth2;

  position2 += itemsLeft >= slidersToScroll
    ? movePosition2
    : itemsLeft * itemWidth2;

  setPosition2();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const setPosition2 = () => {
  track2.style.transform = `translateX(${position2}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnPrev.style.backgroundColor = position === 0 ? `#d3d3d3` : ``;
  btnPrev.style.color = position === 0 ? `#4a4a4a` : ``;

  btnNext.disabled = position <= -(itemsCount - slidersToShow) * (itemWidth);
  btnNext.style.backgroundColor = position <= -(itemsCount - slidersToShow) * (itemWidth) ? `#d3d3d3` : ``;
  btnNext.style.color = position <= -(itemsCount - slidersToShow) * (itemWidth) ? `#4a4a4a` : ``;

  btnPrev2.disabled = position2 === 0;
  btnPrev2.style.backgroundColor = position2 === 0 ? `#d3d3d3` : ``;
  btnPrev2.style.color = position2 === 0 ? `#4a4a4a` : ``;

  btnNext2.disabled = position2 <= -(itemsCount2 - slidersToShow) * (itemWidth2);
  btnNext2.style.backgroundColor = position2 <= -(itemsCount2 - slidersToShow) * (itemWidth2) ? `#d3d3d3` : ``;
  btnNext2.style.color = position2 <= -(itemsCount2 - slidersToShow) * (itemWidth2) ? `#4a4a4a` : ``;
};

checkBtns();

document.querySelector('.burger-menu').onclick = () => {
  document.querySelector('.burger-menu__toggler').checked = false;
};
