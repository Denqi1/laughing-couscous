import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { difficultyLevels } from './difficulty-page.const';
import { pathKeys } from '../../shared/lib/react-router';

export function DifficultyPage() {
  return (
    <Box>
      <Typography>Choose your difficulty</Typography>
      <Link to={pathKeys.difficulty + difficultyLevels.easy}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.easy}
        </Button>
      </Link>
      <Link to={pathKeys.difficulty + difficultyLevels.medium}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.medium}
        </Button>
      </Link>
      <Link to={pathKeys.difficulty + difficultyLevels.hard}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.hard}
        </Button>
      </Link>
    </Box>
  );
}
