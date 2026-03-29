// import type { Difficulty } from '../../model/types';

/**
 * Difficulty level.
 */
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'EXPERT';

/**
 * Parameters for the QuizAPI get questions request.
 */
export interface RequestQuestionsParams {
  /**
   * Filter by quiz category. Supports comma-separated values for multiple categories (case-insensitive).
   * @example Programming,DevOps
   */
  category?: string;
  /**
   * Filter by difficulty. Supports comma-separated values (case-insensitive).
   * @example EASY,MEDIUM,
   */
  difficulty?: Difficulty;
  /**
   * Filter by question type. Supports comma-separated values.
   * @example MULTIPLE_CHOICE,TRUE_FALSE
   */
  type?: string;
  /**
   * Comma-separated list of tags to match.
   * @example javascript,react
   */
  tags?: string;
  /**
   * Number of questions to return per page (1–50).
   * @default 10
   */
  limit?: number;
  /**
   * Number of questions to skip for pagination.
   * @default 0
   */
  offset?: number;
  /**
   * Set to "true" to shuffle the returned questions randomly.
   * @default false
   */
  random?: string;
}
