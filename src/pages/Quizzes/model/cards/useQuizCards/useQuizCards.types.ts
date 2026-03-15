import { QuizData } from '@/entities/Quiz';

/**
 * Pagination metadata for the API response.
 */
interface Meta {
  /**
   * Total number of quizzes matching your filters (across all pages).
   */
  total: number;
  /**
   * The limit value used for this request.
   */
  limit: number;
  /**
   * The offset value used for this request.
   */
  offset: number;
}

/**
 * API response shape for the quizzes list endpoint.
 */
export interface QuizzesList {
  /**
   * Whether the API request succeeded.
   */
  success: boolean;
  /**
   * Paginated list of quizzes.
   */
  data: QuizData[];
  /**
   * Pagination metadata (total count, limit, offset).
   */
  meta: Meta;
}

/**
 *
 */
export interface CachedQuizzesList {
  /**
   *
   */
  [numberPage: number]: QuizData[];
}

/**
 *
 */
export interface UseQuizCardsOptions {
  /**
   *
   */
  currentPage: number;
  /**
   *
   */
  setTheAmountOfPages: (pageCounts: number) => void;
}
