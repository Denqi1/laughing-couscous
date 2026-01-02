import { Checkbox, FormControlLabel } from '@mui/material';
import { ToggleAnswerButtonProps } from './toggle-answer.types';
import { useAppStore } from '@/app/model';

export function ToggleAnswerButton(props: ToggleAnswerButtonProps) {
  const { answer } = props;

  const checkedAnswers = useAppStore((state) => state.answers.checkedAnswers);
  const toggleAnswer = useAppStore((state) => state.answers.toggleAnswer);

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
