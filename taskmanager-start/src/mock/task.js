import {COLORS as colors} from "./../const.js";

import {getRandomInteger} from "./../utils.js";


const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};


export const generateColor = () => {

  const randomIndex = getRandomInteger(0, colors.length - 1);
  return colors[randomIndex];
};

const generateDate = () => {
  const isDate = Boolean(getRandomInteger());

  if (!isDate) {
    return null;
  }
  const maxDateGap = 7;
  const daysGap = getRandomInteger(-maxDateGap, maxDateGap);

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateRepeatingDays = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false
  };
};

export const generateTask = () => {
  const dueDate = generateDate();
  const repeatingDays = dueDate === null ? generateRepeatingDays() : {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false
  };

  return {
    description: generateDescription(),
    dueDate,
    repeatingDays,
    color: generateColor(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isArchive: Boolean(getRandomInteger(0, 1)),
  };
};

export const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};
