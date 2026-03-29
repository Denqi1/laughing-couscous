import { useEffect, useState } from 'react';
import { instance } from '@/shared/lib/axios';
import {
  CachedQuizzesList,
  QuizzesList,
  UseQuizCardsOptions,
} from './useQuizCards.types';
import { OFFSET_PAGE } from '../../../lib/pagination';
import {
  BASE_LIMIT_CARDS_ON_PAGE,
  COUNT_DISPLAY_SKELETON_CARDS,
} from '../constants';
import { QuizCard } from '@/pages/Quizzes/ui/QuizCard';
import { createArrayWithRandomNumbers } from '@/pages/Quizzes/lib/createArrayWithRandomNumbers';
import { QuizCardSkeleton } from '@/pages/Quizzes/ui/QuizCardSkeleton/QuizCardSkeleton';

export const useQuizCards = (options: UseQuizCardsOptions) => {
  const { currentPage, setTheAmountOfPages } = options;

  const [cachedQuizzesList, setCachedQuizzesList] =
    useState<CachedQuizzesList | null>(null);

  useEffect(() => {
    const getQuizzes = async () => {
      if (cachedQuizzesList && cachedQuizzesList[currentPage]) {
        return;
      }

      try {
        const offset = (currentPage - OFFSET_PAGE) * BASE_LIMIT_CARDS_ON_PAGE;

        const { data } = await instance.get<QuizzesList>(
          `/quizzes?limit=${BASE_LIMIT_CARDS_ON_PAGE}&offset=${offset}`
        );
        const { data: quizzesData, meta } = data;

        setTheAmountOfPages(Math.ceil(meta.total / BASE_LIMIT_CARDS_ON_PAGE));
        setCachedQuizzesList((prev) => {
          return {
            ...prev,
            [currentPage]: quizzesData,
          };
        });
      } catch (error) {
        /**
         * Add error handling
         *
         * 400, 401, 429, 500
         */
      }
    };

    getQuizzes();
  }, [currentPage, cachedQuizzesList, setTheAmountOfPages]);

  if (cachedQuizzesList && cachedQuizzesList[currentPage]) {
    return (
      <>
        {cachedQuizzesList[currentPage].map((quiz) => {
          const { id } = quiz;

          return <QuizCard quiz={quiz} key={id} />;
        })}
      </>
    );
  }

  return (
    <>
      {createArrayWithRandomNumbers({
        resultArrayLength: COUNT_DISPLAY_SKELETON_CARDS,
      }).map((value) => {
        return <QuizCardSkeleton key={value} />;
      })}
    </>
  );
};
