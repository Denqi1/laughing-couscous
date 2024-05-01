import { create } from 'zustand';
import {
  IsCorrect,
  QuestionModel,
  RequestQuestionsParams,
  getQuestions,
} from '../../entities/questions';
// import { IsCorrect } from '../../entities/questions/questions.types';

type MatchState = {
  questions: QuestionModel[];
  correctAnswers: CorrectAnswers;
  userAnswers: CorrectAnswers;
};

type CorrectAnswers = {
  [indexQuestion: number]: string[];
};

// type CorrectAnswerLetter = {
//   [answerLetter: string]: IsCorrect;
// }

type MatchAction = {
  requestQuestions: (_params: RequestQuestionsParams) => Promise<void>;
  updateUserAnswers: (_answers: string[], _indexQuestion: number) => void;
};

// type UserAnswersArgs = {
//   answers: string[];
// }

export const useGameStore = create<MatchState & MatchAction>((set) => ({
  questions: [],
  correctAnswers: {},
  userAnswers: {},
  requestQuestions: async (params: RequestQuestionsParams) => {
    const dataQuestions = await getQuestions({ ...params });
    set((state) => ({ ...state, questions: dataQuestions }));

    const correctAnswers = dataQuestions.reduce((obj, question) => {
      const ob: {
        [key: string]: string;
      } = {};

      for (const [key, value] of Object.entries(question.correct_answers)) {
        if (value === 'true') {
          const newKey = key.split('_')[0] + '_' + key.split('_')[1];
          ob[newKey] = newKey;

          question.correct_answers[newKey];
        }
      }

      return {
        ...obj,
        // TODO
        [question.id]: ob,
      };
    }, {});
    console.log('correctAnswers', correctAnswers);

    // set((state) => ({...state, correctAnswers: }))
  },
  updateUserAnswers: (answers, indexQuestion) => {
    set((state) => ({
      ...state,
      userAnswers: { ...state.userAnswers, [indexQuestion]: answers },
    }));
  },
}));
