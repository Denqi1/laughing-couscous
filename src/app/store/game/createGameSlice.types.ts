import type {
  QuestionModel,
  RequestQuestionsParams,
  AnswersByQuestionId,
} from '@/entities/Question';

/**
 * Store slice for questions and quiz run state.
 */
export interface GameSlice {
  /**
   * List of questions for the current game.
   */
  questions: QuestionModel[];
  /**
   * Whether questions are being fetched.
   */
  isLoading: boolean;
  /**
   * Whether the last questions request failed.
   */
  isError: boolean;
  /**
   * Map of question id to array of correct answer keys (from API).
   */
  correctAnswers: AnswersByQuestionId;
  /**
   * Fetches questions by category/difficulty/limit and updates the slice.
   */
  requestQuestions: (params: RequestQuestionsParams) => Promise<void>;
}
