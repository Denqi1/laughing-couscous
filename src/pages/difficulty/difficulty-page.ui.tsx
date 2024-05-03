import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { difficultyLevels } from './difficulty-page.const';

export function DifficultyPage() {
  return (
    <Box>
      <Typography>Choose your difficulty</Typography>
      <Link to={`difficulty/${difficultyLevels.easy}`}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.easy}
        </Button>
      </Link>
      <Link to={`difficulty/${difficultyLevels.medium}`}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.medium}
        </Button>
      </Link>
      <Link to={`difficulty/${difficultyLevels.hard}`}>
        <Button variant="contained" color="secondary">
          {difficultyLevels.hard}
        </Button>
      </Link>
    </Box>
  );
}
