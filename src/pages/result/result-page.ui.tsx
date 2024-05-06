import { Box, Button, Typography } from '@mui/material';
import { useAppStore } from '../../app/model';
import { isArraysEqual } from './result-page.lib';
import { Link } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';

export function ResultPage() {
  const userAnswers = useAppStore((state) => state.answers.userAnswers);
  const correctAnswers = useAppStore((state) => state.game.correctAnswers);
  const questions = useAppStore((state) => state.game.questions);
  console.log('questions', questions);
  console.log('userAnswers', userAnswers);

  // main: '#e87238',
  // light: '#e38b5f',
  // dark: '#d94e09',

  return (
    <Box>
      <Typography variant="h2" textAlign="center" mb={5}>
        Quiz Information
      </Typography>

      {questions.map((question) => (
        <Box key={question.id} border="2px solid black" mb={5} p={2}>
          <Typography variant="h5" textAlign="center" mb={5}>
            Question:{' '}
            <Typography variant="caption" fontSize="16px">
              {question.question}
            </Typography>
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={5}>
            <Box bgcolor="#6F299F" flex={1} p={2}>
              <Typography variant="h6" textAlign="center" mb={1}>
                Given Answers
              </Typography>
              {Object.entries(question.answers).map((answer) => (
                <Typography key={answer[0]} mb={1}>
                  {answer[1]}
                </Typography>
              ))}
            </Box>
            <Box bgcolor="#8434A8" flex={1} p={2}>
              <Typography variant="h6" mb={1} textAlign="center">
                Your Answers
              </Typography>
              {userAnswers[question.id].map((answer) => (
                <Typography key={answer} mb={1}>
                  {answer}
                </Typography>
              ))}
            </Box>
            <Box bgcolor="#9940B2" flex={1} p={2}>
              <Typography variant="h6" textAlign="center" mb={1}>
                Correct Answers
              </Typography>
              {correctAnswers[question.id].map((answer) => (
                <Typography key={answer} mb={1}>
                  {answer}
                </Typography>
              ))}
            </Box>
          </Box>
          <Typography
            textTransform="uppercase"
            textAlign="center"
            m={1}
            variant="h6"
          >
            {isArraysEqual(
              userAnswers[question.id],
              correctAnswers[question.id]
            )
              ? '😊 correct'
              : '😡 wrong'}
          </Typography>
        </Box>
      ))}

      <Box mb={5} display="flex" justifyContent="center" gap={10}>
        <Link to={pathKeys.home}>
          <Button variant="contained" color="secondary" size="large">
            Home Page
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
