import type { AnswersByQuestionId } from '@/entities/Question';

/**
 * Store slice for the current quiz attempt's answers and navigation.
 */
export interface AnswersSlice {
  /**
   * Currently selected answer option keys (e.g. "answer_a") for the current question.
   */
  checkedAnswers: string[];
  /**
   * Zero-based index of the question being shown.
   */
  currentQuestionIndex: number;
  /**
   * Map of question id to array of selected answer keys (e.g. answer_a) per question.
   */
  userAnswers: AnswersByQuestionId;
  /**
   * Clears the current question's selected answers.
   */
  clearCheckedAnswers: () => void;
  /**
   * Adds or removes an answer key in checkedAnswers.
   */
  toggleAnswer: (userAnswer: string) => void;
  /**
   * Advances to the next question.
   */
  incrementQuestionIndex: () => void;
  /**
   * Saves current checkedAnswers for the given question id and clears them.
   */
  updateUserAnswers: (answers: string[], questionId: number) => void;
  /**
   * Resets the current question index (e.g. for a new game).
   */
  resetQuestionIndex: () => void;
}
