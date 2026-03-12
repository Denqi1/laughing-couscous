/**
 * QuizAPI difficulty level.
 */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

/**
 * QuizAPI string flag indicating if an answer option is correct.
 */
export type IsCorrect = 'true' | 'false';

/**
 * QuizAPI answer options; keys answer_a through answer_f, value null if unused.
 */
export interface Answers {
  /**
   * Answer option A text, or null if unused.
   */
  answer_a: null | string;
  /**
   * Answer option B text, or null if unused.
   */
  answer_b: null | string;
  /**
   * Answer option C text, or null if unused.
   */
  answer_c: null | string;
  /**
   * Answer option D text, or null if unused.
   */
  answer_d: null | string;
  /**
   * Answer option E text, or null if unused.
   */
  answer_e: null | string;
  /**
   * Answer option F text, or null if unused.
   */
  answer_f: null | string;
}

/**
 * QuizAPI flags for which options are correct (answer_a_correct through answer_f_correct).
 */
export interface CorrectAnswers {
  /**
   * QuizAPI flag for answer_a correctness.
   */
  [answer_a_correct: string]: IsCorrect;
  /**
   * QuizAPI flag for answer_b correctness.
   */
  answer_b_correct: IsCorrect;
  /**
   * QuizAPI flag for answer_c correctness.
   */
  answer_c_correct: IsCorrect;
  /**
   * QuizAPI flag for answer_d correctness.
   */
  answer_d_correct: IsCorrect;
  /**
   * QuizAPI flag for answer_e correctness.
   */
  answer_e_correct: IsCorrect;
  /**
   * QuizAPI flag for answer_f correctness.
   */
  answer_f_correct: IsCorrect;
}

/**
 * Map from question id to array of correct answer keys (e.g. ["answer_a"]).
 */
export interface AnswersByQuestionId {
  /**
   * Array of selected or correct answer keys for the question.
   */
  [questionId: number]: string[];
}

/**
 * Single question from QuizAPI.
 */
export interface QuestionModel {
  /**
   * Question id.
   */
  id: number;
  /**
   * Question text.
   */
  question: string;
  /**
   * Optional description of the question.
   */
  description: null | string;
  /**
   * Answer options object (answer_a through answer_f).
   */
  answers: Answers;
  /**
   * Whether more than one option can be correct.
   */
  multiple_correct_answers: IsCorrect;
  /**
   * QuizAPI correct flags object for each option.
   */
  correct_answers: CorrectAnswers;
  /**
   * Single correct answer key when applicable.
   */
  correct_answer: null | string;
  /**
   * Answer explanation.
   */
  explanation: null | string;
  /**
   * Optional hint for the question.
   */
  tip: null | string;
  /**
   * Topic tags.
   */
  tags: string[];
  /**
   * Category name.
   */
  category: string;
  /**
   * Difficulty level.
   */
  difficulty: Difficulty;
}
