import { Answers } from '@/entities/Question';

/**
 * Props for the list of answer options.
 */
export interface AnswersListProps {
  /**
   * QuizAPI answers object (answer_a through answer_f).
   */
  answers: Answers;
  /**
   * Currently selected answer keys for this question.
   */
  checkedAnswers: string[];
  /**
   * Callback when user toggles an answer; receives the answer key.
   */
  onAnswerToggle: (userAnswer: string) => void;
}
