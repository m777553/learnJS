const filterNames = [
  `all`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`,
];


const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 18),
    };
  });
};

export {
  generateFilters
};
