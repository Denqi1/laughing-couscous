import { create } from 'zustand';

type CorrectAnswers = {
  [indexQuestion: number]: string[];
};

type AnswersState = {
  checkedAnswers: string[];
  numberOfAnswers: number;
  userAnswers: CorrectAnswers;
};

type AnswersAction = {
  clearCheckedAnswers: () => void;
  toggleAnswer: (_userAnswer: string) => void;
  increaseNumberOfAnswers: () => void;
  updateUserAnswers: (_answers: string[], _indexQuestion: number) => void;
};

export const useAnswerStore = create<AnswersState & AnswersAction>(
  (set, get) => ({
    checkedAnswers: [],
    numberOfAnswers: 0,
    userAnswers: {},
    clearCheckedAnswers: () => {
      set((state) => ({
        ...state,
        checkedAnswers: [],
      }));
    },
    toggleAnswer: (userAnswer: string) => {
      const checkedAnswers = get().checkedAnswers;
      const newChecked = [...checkedAnswers];

      if (checkedAnswers.includes(userAnswer)) {
        const indexChecked = newChecked.indexOf(userAnswer);
        newChecked.splice(indexChecked, 1);

        set((state) => ({ ...state, checkedAnswers: newChecked }));
      } else if (!checkedAnswers.includes(userAnswer)) {
        newChecked.push(userAnswer);

        set((state) => ({ ...state, checkedAnswers: newChecked }));
      }
    },
    increaseNumberOfAnswers() {
      set((state) => ({
        ...state,
        numberOfAnswers: state.numberOfAnswers + 1,
      }));
    },
    updateUserAnswers: (answers, idQuestion) => {
      set((state) => ({
        ...state,
        userAnswers: { ...state.userAnswers, [idQuestion]: answers },
      }));
    },
  })
);
