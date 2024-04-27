import { Button } from '@mui/material';
import { ChooseCategoryButtonProps } from './choose.category.types';

export function ChooseCategoryButton(props: ChooseCategoryButtonProps) {
  const { buttonName } = props;

  const handleClick = () => {
    console.log('click');
  };

  return <Button onClick={handleClick}>{buttonName}</Button>;
}
