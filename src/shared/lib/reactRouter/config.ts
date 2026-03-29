export const routePaths = {
  home: '/',
  quizzes: '/quizzes',
  // category: '/category',
  // difficulty: '/category/:categoryName',
  // game: '/category/:categoryName/difficulty/:difficultyLevel',
  // result: '/category/:categoryName/difficulty/:difficultyLevel/game-result',
  notFound: '*',
};

export const pathKeys = {
  home: () => {
    return routePaths.home;
  },
  quizzes: () => {
    return routePaths.quizzes;
  },
  // category: () => {
  //   return routePaths.category;
  // },
  // difficulty: (categoryName = '') => {
  //   return `/category/${categoryName}`;
  // },
  // game: (categoryName = '', difficultyLevel = '') => {
  //   return `/category/${categoryName}/difficulty/${difficultyLevel}`;
  // },
  // result: (categoryName = '', difficultyLevel = '') => {
  //   return `/category/${categoryName}/difficulty/${difficultyLevel}/game-result`;
  // },
};
