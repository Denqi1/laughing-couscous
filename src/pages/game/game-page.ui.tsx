import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

  // console.log('questions', questions);
  console.log('answers', userAnswers);

  return (
    <Box>
      <Box>{questions[indexCurrentQuestion]?.question}</Box>
      <List>
        {Object.values(questions[indexCurrentQuestion]?.answers || {}).map(
          (answer) =>
            answer && (
              <ListItem key={answer}>
                <ListItemButton onClick={() => handleToggle(answer)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(answer) !== -1}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText primary={answer} />
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
      {indexCurrentQuestion < questions.length ? (
        <Button
          onClick={() => handleNextQuestion(questions[indexCurrentQuestion].id)}
        >
          Next question
        </Button>
      ) : (
        <Button>Find out the result</Button>
      )}
    </Box>
  );
}
