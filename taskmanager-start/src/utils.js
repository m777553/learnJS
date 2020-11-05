export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// повторяемость задачи
export const isRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

// Опишем функцию, которая будет проверять, просрочена ли задача
export const isExpired = (someDate) => {
  if (someDate === null) {
    return false;
  }

  let currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  // currentDate = new Date(currentDate);
  return currentDate.getTime() > someDate.getTime();
};

// Дата в человеческом формате
export const humanizeDate = (dueDate) => {
  return (
    dueDate !== null ? dueDate.toLocaleString(`en-US`, {
      day: `numeric`,
      month: `long`
    }) : ``);
};

// Время в человеческом формате
export const humanizeTime = (dueDate) => {
  return (
    dueDate !== null ? dueDate.toLocaleString(`en-US`, {
      hour: `numeric`,
      minute: `numeric`
    }) : ``);
};

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  return new Date(currentDate);
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }
  const currentDate = getCurrentDate();
  return dueDate.getTime() === currentDate.getTime();
};


// Функция принимает контейнер для вставки, разметку в виде строки  и положение
export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case renderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case renderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


export const createMyElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
