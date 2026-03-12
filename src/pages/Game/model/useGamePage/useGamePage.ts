import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppStore } from '@/app/store';

import { Difficulty, LIMIT_QUESTIONS } from '@/entities/Question';

export const useGamePage = () => {
  const currentQuestionIndex = useAppStore((state) => {
    return state.answers.currentQuestionIndex;
  });
  const questions = useAppStore((state) => {
    return state.game.questions;
  });
  const requestQuestions = useAppStore((state) => {
    return state.game.requestQuestions;
  });
  const resetQuestionIndex = useAppStore((state) => {
    return state.answers.resetQuestionIndex;
  });
  const checkedAnswers = useAppStore((state) => {
    return state.answers.checkedAnswers;
  });
  const clearCheckedAnswers = useAppStore((state) => {
    return state.answers.clearCheckedAnswers;
  });
  const updateUserAnswers = useAppStore((state) => {
    return state.answers.updateUserAnswers;
  });
  const isLoading = useAppStore((state) => {
    return state.game.isLoading;
  });
  const isError = useAppStore((state) => {
    return state.game.isError;
  });
  const incrementQuestionIndex = useAppStore((state) => {
    return state.answers.incrementQuestionIndex;
  });
  const toggleAnswer = useAppStore((state) => {
    return state.answers.toggleAnswer;
  });

  const isNoQuestionsFound = !isLoading && !isError && questions.length === 0;

  const submitFinalAnswer = () => {
    updateUserAnswers(checkedAnswers, questions[currentQuestionIndex].id);
    clearCheckedAnswers();
    resetQuestionIndex();
  };

  const goToNextQuestion = () => {
    incrementQuestionIndex();
    updateUserAnswers(checkedAnswers, questions[currentQuestionIndex].id);
    clearCheckedAnswers();
  };

  const { categoryName, difficultyLevel } = useParams<{
    /**
     * Route param for the selected category name.
     */
    categoryName?: string;
    /**
     * Route param for the selected difficulty (e.g. Easy, Medium, Hard).
     */
    difficultyLevel?: Difficulty;
  }>();

  useEffect(() => {
    requestQuestions({
      category: categoryName,
      difficulty: difficultyLevel,
      limit: LIMIT_QUESTIONS,
    });
  }, [categoryName, difficultyLevel, requestQuestions]);

  return {
    submitFinalAnswer,
    goToNextQuestion,
    isLoading,
    isError,
    isNoQuestionsFound,
    currentQuestionIndex,
    questions,
    checkedAnswers,
    toggleAnswer,
    categoryName,
    difficultyLevel,
  };
};
