import { CreateArrayWithRandomNumbers } from './createArrayWithRandomNumbers.types';

export const createArrayWithRandomNumbers = (
  options: CreateArrayWithRandomNumbers
): number[] => {
  const { array = [], resultArrayLength = 2 } = options;

  if (array.length < resultArrayLength) {
    return createArrayWithRandomNumbers({
      ...options,
      array: [...array, Math.random()],
    });
  }

  return array;
};
