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


// Функция помещает задачи без даты в конце списка,
// возвращая нужный вес для колбэка sort
const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

export const sortTaskUp = (taskA, taskB) => {
  const weight = getWeightForNullDate(taskA.dueDate, taskB.dueDate);

  if (weight !== null) {
    return weight;
  }

  return taskA.dueDate.getTime() - taskB.dueDate.getTime();
};

export const sortTaskDown = (taskA, taskB) => {
  const weight = getWeightForNullDate(taskA.dueDate, taskB.dueDate);

  if (weight !== null) {
    return weight;
  }

  return taskB.dueDate.getTime() - taskA.dueDate.getTime();
};
