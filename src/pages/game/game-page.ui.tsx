import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Difficulty, limitQuestions } from '../../entities/questions';
import { AnswerList } from '../../widgets/answer';
import { NextQuestionButton } from '../../features/answer';
import { pathKeys } from '../../shared/lib/react-router';
import { useAppStore } from '../../app/model/app-model';

export function GamePage() {
  const numberOfAnswers = useAppStore((state) => state.answers.numberOfAnswers);
  const userAnswers = useAppStore((state) => state.answers.userAnswers);
  const correctAnswers = useAppStore((state) => state.game.correctAnswers);
  const questions = useAppStore((state) => state.game.questions);
  const requestQuestions = useAppStore((state) => state.game.requestQuestions);

  const { categoryName, difficultyLevel } = useParams<{
    categoryName: string | undefined;
    difficultyLevel: Difficulty | undefined;
  }>();

  useEffect(() => {
    (async () => {
      await requestQuestions({
        category: categoryName,
        difficulty: difficultyLevel,
        limit: limitQuestions,
      });
    })();
  }, [categoryName, difficultyLevel, requestQuestions]);

  console.log('correctAnswers', correctAnswers);
  console.log('userAnswers', userAnswers);

  const button =
    // If the current number of answers does not exceed the maximum
    numberOfAnswers < questions.length - 1 ? (
      <NextQuestionButton questionId={questions[numberOfAnswers].id} />
    ) : (
      <Link to={pathKeys.result}>
        <Button>Find out the result</Button>
      </Link>
    );

  return (
    <Box m="0px 20px">
      <Box p="90px 46px" m="50px 100px" textAlign="center" bgcolor="#42067d">
        <Typography fontSize="36px" color="#FFA247">
          {questions[numberOfAnswers]?.question}
        </Typography>
      </Box>
      <AnswerList answers={questions[numberOfAnswers]?.answers} />
      <Box textAlign="center">{button}</Box>
    </Box>
  );
}
