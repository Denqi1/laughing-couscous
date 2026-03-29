import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Grid, Pagination, Typography } from '@mui/material';

import { useQuizCards } from './model/cards';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const QuizzesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(1);

  const setTheAmountOfPages = (pageCounts: number) => {
    setPageCounts(pageCounts);
  };

  const quizzesCards = useQuizCards({ currentPage, setTheAmountOfPages });

  return (
    <Box component="main" minHeight="100dvh" py={4} px={2}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={(theme) => {
          return { color: theme.custom.textOnDark.primary };
        }}
        textAlign="center"
        mb={4}
      >
        Quizzes
      </Typography>

      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        maxWidth={900}
        margin="0 auto"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {quizzesCards}
      </Grid>

      <Pagination
        count={pageCounts}
        color="secondary"
        onChange={(_e, page) => {
          setCurrentPage(page);
        }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};
