import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGameStore } from './game-page.model';
import { Difficulty } from '../../entities/questions';

export function GamePage() {
  const questions = useGameStore((state) => state.questions);
  const requestQuestions = useGameStore((state) => state.requestQuestions);
  const correctAnswers = useGameStore((state) => state.correctAnswers);

  const userAnswers = useGameStore((state) => state.userAnswers);
  const updateUserAnswers = useGameStore((state) => state.updateUserAnswers);

  console.log('correctAnswers', correctAnswers);
  console.log('userAnswers', userAnswers);

  const { categoryName, difficultyLevel } = useParams<{
    categoryName: string | undefined;
    difficultyLevel: Difficulty | undefined;
  }>();

  useEffect(() => {
    (async () => {
      await requestQuestions({
        category: categoryName,
        difficulty: difficultyLevel,
      });
    })();
  }, [categoryName, difficultyLevel, requestQuestions]);

  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0);

  const handleNextQuestion = () => {
    updateUserAnswers(checked, questions[indexCurrentQuestion].id);
    setChecked([]);
    setIndexCurrentQuestion(indexCurrentQuestion + 1);
  };

  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (userAnswer: string) => {
    const newChecked = [...checked];

    if (checked.includes(userAnswer)) {
      const indexChecked = newChecked.indexOf(userAnswer);
      newChecked.splice(indexChecked, 1);
      setChecked(newChecked);

      return;
    }

    newChecked.push(userAnswer);
    setChecked(newChecked);
  };

  return (
    <Box m="0px 20px">
      <Box p="90px 46px" m="50px 100px" textAlign="center" bgcolor="#42067d">
        <Typography fontSize="36px" color="#FFA247">
          {questions[indexCurrentQuestion]?.question}
        </Typography>
      </Box>
      <Grid
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={5}
        container
      >
        {Object.values(questions[indexCurrentQuestion]?.answers || {}).map(
          (answer) =>
            answer && (
              <Grid item xs={6} key={answer}>
                <Box bgcolor="#D4A9FF" borderRadius="5px" p={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={() => handleToggle(answer)}
                          checked={checked.includes(answer)}
                          color="default"
                        />
                      }
                      color="#5A1E96"
                      label={answer}
                    />
                  </FormGroup>
                </Box>
              </Grid>
            )
        )}
      </Grid>
      <Box textAlign="center">
        {indexCurrentQuestion < questions.length ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNextQuestion}
          >
            Next question
          </Button>
        ) : (
          <Button>Find out the result</Button>
        )}
      </Box>
    </Box>
  );
}
