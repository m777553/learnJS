// const filterNames = [
//   `all`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`,
// ];
//
//
// const generateFilters = () => {
//   return filterNames.map((it) => {
//     return {
//       name: it,
//       count: Math.floor(Math.random() * 18),
//     };
//   });
// };
//
// export {
//   generateFilters
// };

import {
  isExpired,
  isRepeating,
  isTaskExpiringToday
} from "../utils.js";


// Заведем "мапу" (от англ. map, карта) - объект, где ключи - названия фильтров, а значения - функции-счетчики

const taskToFilterMap = {
  all: (tasks) => tasks.filter((task) => !task.isArchive).length,
  Overdue: (tasks) => tasks
		.filter((task) => !task.isArchive)
		.filter((task) => isExpired(task.dueDate)).length,
  Today: (tasks) => tasks
		.filter((task) => !task.isArchive)
		.filter((task) => isTaskExpiringToday(task.dueDate)).length,
  Favorites: (tasks) => tasks
		.filter((task) => !task.isArchive)
		.filter((task) => task.isFavorite).length,
  Repeating: (tasks) => tasks
		.filter((task) => !task.isArchive)
		.filter((task) => isRepeating(task.repeatingDays)).length,
  Archive: (tasks) => tasks
		.filter((task) => task.isArchive).length,
};


export const generateFilter = (tasks) => {
  return (
    Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
      return {
        name: filterName,
        count: countTasks(tasks),
      };
    })
  );
};
