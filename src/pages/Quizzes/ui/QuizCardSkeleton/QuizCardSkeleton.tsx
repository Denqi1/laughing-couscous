import { Box, Card, CardContent, Divider, Grid, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export const QuizCardSkeleton = () => {
  return (
    <Grid item xs={4} sm={4} md={4}>
      <motion.div variants={itemVariants}>
        <Card
          sx={(theme) => {
            return {
              background: theme.custom.glass.background,
              backdropFilter: 'blur(10px)',
              border: theme.custom.glass.border,
              cursor: 'default',
              borderRadius: 3,
            };
          }}
        >
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={180}
              height={21}
            />
            <Skeleton variant="rectangular" animation="wave" height={39} />

            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Skeleton
                variant="rounded"
                animation="wave"
                width={40}
                height={22}
                sx={{ borderRadius: '16px' }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={66}
                height={22}
                sx={{ borderRadius: '16px' }}
              />
            </Box>

            <Divider />

            <Box display={'flex'} alignItems="center" gap={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                height={20}
                width={60}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                height={20}
                width={60}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Skeleton
                variant="rounded"
                animation="wave"
                width={32}
                height={20}
                sx={{ borderRadius: '16px' }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={72}
                height={20}
                sx={{ borderRadius: '16px' }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={42}
                height={20}
                sx={{ borderRadius: '16px' }}
              />
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};
