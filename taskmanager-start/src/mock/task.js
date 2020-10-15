export const generateTask = () => {
	return {};
};

export const generateTasks = (count) => {
	return new Array(count).fill(``).map(generateTask);
};
