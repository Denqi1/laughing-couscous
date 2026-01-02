import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '@/shared/lib/react-router';

export function Page404() {
  return (
    <Box>
      <Typography variant="h1" component="h1">
        Page not found
      </Typography>
      <Typography>
        Sorry, we couldn`t find the page you were looking for.
      </Typography>
      <Link to={pathKeys.home}>
        <Button>Back to home page</Button>
      </Link>
    </Box>
  );
}
