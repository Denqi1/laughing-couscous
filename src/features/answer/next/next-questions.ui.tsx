import { Button } from '@mui/material';
import { useAnswerStore } from '../../../entities/answer';
import { NextQuestionButtonProps } from './next-question.types';

export function NextQuestionButton(props: NextQuestionButtonProps) {
  const { questionId } = props;

  const checkedAnswers = useAnswerStore((state) => state.checkedAnswers);
  const clearCheckedAnswers = useAnswerStore(
    (state) => state.clearCheckedAnswers
  );
  const increaseNumberOfAnswers = useAnswerStore(
    (state) => state.increaseNumberOfAnswers
  );
  const updateUserAnswers = useAnswerStore((state) => state.updateUserAnswers);

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
