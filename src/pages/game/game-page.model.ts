import { ImmerStateCreator } from '../../app/model/app-model';
import {
  QuestionModel,
  RequestQuestionsParams,
  getQuestions,
} from '../../entities/questions';

export type GameSlice = {
  questions: QuestionModel[];
  correctAnswers: CorrectAnswers;
  requestQuestions: (_params: RequestQuestionsParams) => Promise<void>;
};

type CorrectAnswers = {
  [indexQuestion: number]: string[];
};

export const createGameSlice: ImmerStateCreator<GameSlice> = (set) => ({
  questions: [],
  correctAnswers: {},
  requestQuestions: async (params: RequestQuestionsParams) => {
    const dataQuestions = await getQuestions({ ...params });
    set((state) => {
      state.game.questions = dataQuestions;
    });

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

    set((state) => {
      state.game.correctAnswers = correctAnswers;
    });
  },
});

console.log(typeof createGameSlice);
