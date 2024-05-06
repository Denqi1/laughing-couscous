import { Button } from '@mui/material';
import { NextQuestionButtonProps } from './next-question.types';
import { useAppStore } from '../../../app/model';

export function NextQuestionButton(props: NextQuestionButtonProps) {
  const { questionId } = props;

  console.log('questionId', questionId);

  const checkedAnswers = useAppStore((state) => state.answers.checkedAnswers);
  const clearCheckedAnswers = useAppStore(
    (state) => state.answers.clearCheckedAnswers
  );
  const increaseNumberOfAnswers = useAppStore(
    (state) => state.answers.increaseNumberOfAnswers
  );
  const updateUserAnswers = useAppStore(
    (state) => state.answers.updateUserAnswers
  );

  const handleNextQuestion = () => {
    increaseNumberOfAnswers();
    updateUserAnswers(checkedAnswers, questionId);
    clearCheckedAnswers();
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleNextQuestion}>
      Next question
    </Button>
  );
}
