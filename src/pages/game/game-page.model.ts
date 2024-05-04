import { create } from 'zustand';
import {
  QuestionModel,
  RequestQuestionsParams,
  getQuestions,
} from '../../entities/questions';

type MatchState = {
  questions: QuestionModel[];
  correctAnswers: CorrectAnswers;
  // userAnswers: CorrectAnswers;
};

type CorrectAnswers = {
  [indexQuestion: number]: string[];
};

type MatchAction = {
  requestQuestions: (_params: RequestQuestionsParams) => Promise<void>;
  // updateUserAnswers: (_answers: string[], _indexQuestion: number) => void;
};

export const useGameStore = create<MatchState & MatchAction>((set) => ({
  questions: [],
  correctAnswers: {},
  // userAnswers: {},
  requestQuestions: async (params: RequestQuestionsParams) => {
    const dataQuestions = await getQuestions({ ...params });
    set((state) => ({ ...state, questions: dataQuestions }));

    const correctAnswers = dataQuestions.reduce((obj, question) => {
      const result: string[] | null = [];

      for (const [key, value] of Object.entries(question.correct_answers)) {
        if (value === 'true') {
          const indexCorrectAnswer = Object.keys(
            question.correct_answers
          ).indexOf(key);

          result.push(Object.values(question.answers)[indexCorrectAnswer]!);
        }
      }

      return {
        ...obj,
        [question.id]: result,
      };
    }, {});

    set((state) => ({ ...state, correctAnswers: correctAnswers }));
  },
  // updateUserAnswers: (answers, idQuestion) => {
  //   set((state) => ({
  //     ...state,
  //     userAnswers: { ...state.userAnswers, [idQuestion]: answers },
  //   }));
  // },
}));
