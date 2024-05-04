import { Checkbox, FormControlLabel } from '@mui/material';
import { ToggleAnswerButtonProps } from './toggle-answer.types';
import { useAnswerStore } from '../../../entities/answer';

export function ToggleAnswerButton(props: ToggleAnswerButtonProps) {
  const { answer } = props;

  const checkedAnswers = useAnswerStore((state) => state.checkedAnswers);
  const toggleAnswer = useAnswerStore((state) => state.toggleAnswer);

  const handleToggle = (userAnswer: string) => {
    toggleAnswer(userAnswer);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => handleToggle(answer)}
          checked={checkedAnswers.includes(answer)}
          color="default"
        />
      }
      color="#5A1E96"
      label={answer}
    />
  );
}
