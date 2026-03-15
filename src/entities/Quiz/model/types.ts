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
