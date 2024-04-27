import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';

export function IntroductionPage() {
  return (
    <Box>
      <Typography variant="h2">Welcome to quiz game</Typography>
      <Link to={pathKeys.choosing()}>
        <Button>Play</Button>
      </Link>
    </Box>
  );
}
