import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export function DifficultyPage() {
  return (
    <Link to={'difficulty/easy'}>
      <Button>easy</Button>
    </Link>
  );
}
