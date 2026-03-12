import type { Difficulty } from '../../model/types';

/**
 * Parameters for the QuizAPI get questions request.
 */
export interface RequestQuestionsParams {
  /**
   * Optional QuizAPI category name filter.
   */
  category?: string;
  /**
   * Optional difficulty filter.
   */
  difficulty?: Difficulty;
  /**
   * Optional maximum number of questions to return.
   */
  limit?: number;
}
