export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIndex = (arr) => {
  return getRandomInteger(0, arr.length - 1);
};


export const createRandomMassive = (fullMassive, lengthCreateveMassive) => {
  const newMassive = [];
  for (let i = 0; i < lengthCreateveMassive; i++) {
    let j = Math.floor(Math.random() * (fullMassive.length - i)) + i;

    let elem = fullMassive[j];
    fullMassive[j] = fullMassive[i];
    fullMassive[i] = elem;

    newMassive.push(elem);
  }
  return newMassive;
};
