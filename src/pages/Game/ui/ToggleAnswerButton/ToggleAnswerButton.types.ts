/**
 * Props for a single answer toggle button.
 */
export interface ToggleAnswerButtonProps {
  /**
   * Answer option text to display.
   */
  answer: string;
  /**
   * Whether this option is currently selected.
   */
  isChecked: boolean;
  /**
   * Callback when the option is toggled; receives the answer key.
   */
  onToggle: (userAnswer: string) => void;
}
