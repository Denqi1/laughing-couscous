export type RequestQuestionsParams = {
  category: string | undefined;
  difficulty: Difficulty | undefined;
  limit?: number;
};

export type QuestionModel = {
  id: number;
  question: string;
  description: null | string;
  answers: Answers;
  multiple_correct_answers: IsCorrect;
  correct_answers: CorrectAnswers;
  correct_answer: null | string;
  explanation: null | string;
  tip: null | string;
  tags: string[];
  category: string;
  difficulty: Difficulty;
};

export type Answers = {
  answer_a: null | string;
  answer_b: null | string;
  answer_c: null | string;
  answer_d: null | string;
  answer_e: null | string;
  answer_f: null | string;
};

export type CorrectAnswers = {
  [answer_a_correct: string]: IsCorrect;
  answer_b_correct: IsCorrect;
  answer_c_correct: IsCorrect;
  answer_d_correct: IsCorrect;
  answer_e_correct: IsCorrect;
  answer_f_correct: IsCorrect;
};

export type IsCorrect = 'true' | 'false';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
