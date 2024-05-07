import { Box, FormGroup, Grid } from '@mui/material';
import { AnswerListProps } from './answer-list.type';
import { ToggleAnswerButton } from '../../features/answer';

export function AnswerList(props: AnswerListProps) {
  const { answers } = props;

  return (
    <Grid
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      mb={5}
      container
    >
      {Object.values(answers || {}).map(
        (answer) =>
          answer && (
            <Grid item xs={6} key={answer}>
              <Box bgcolor="#D4A9FF" borderRadius="5px" p={2}>
                <FormGroup>
                  <ToggleAnswerButton answer={answer} />
                </FormGroup>
              </Box>
            </Grid>
          )
      )}
    </Grid>
  );
}
