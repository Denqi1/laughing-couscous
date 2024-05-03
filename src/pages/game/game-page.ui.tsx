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
  const userAnswers = useGameStore((state) => state.userAnswers);
  const updateUserAnswers = useGameStore((state) => state.updateUserAnswers);

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

  const [checked, setChecked] = useState<string[]>([]);
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0);

  const handleToggle = (toggleValue: string) => {
    const currentIndex = checked.indexOf(toggleValue);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(toggleValue);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleNextQuestion = (idQuestion: number) => {
    console.log('next');

    updateUserAnswers(checked, idQuestion);
    setChecked([]);
    setIndexCurrentQuestion(indexCurrentQuestion + 1);
  };

  console.log('answers', userAnswers);

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
                <Box bgcolor="#D4A9FF" borderRadius="5px">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
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
            onClick={() =>
              handleNextQuestion(questions[indexCurrentQuestion].id)
            }
            variant="contained"
            color="secondary"
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
