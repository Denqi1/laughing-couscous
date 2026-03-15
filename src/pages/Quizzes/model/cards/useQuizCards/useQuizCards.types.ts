/**
 * Single quiz item in the API response list.
 */
export interface QuizData {
  /**
   * Unique identifier for the quiz.
   * @example quiz_abc123
   */
  id: string;
  /**
   * The title of the quiz.
   */
  title: string;
  /**
   * Optional description.
   */
  description: string | null;
  /**
   * Category slug.
   * @example programming, science, math
   */
  category: string;
  /**
   * One of: EASY, MEDIUM, HARD, EXPERT
   */
  difficulty: string;
  /**
   * Array of tag strings for filtering.
   */
  tags: string[];
  /**
   * Number of questions in the quiz.
   */
  questionCount: number;
  /**
   * Total number of times the quiz has been played.
   */
  plays: number;
}

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
