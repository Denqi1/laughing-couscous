import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

import { ParallaxText } from '@/shared/ui/parallax-text';
import { SmileCouscousSvg } from '@/shared/ui/couscous';

import { pathKeys } from '@/shared/lib/reactRouter';

/**
 * Available categories, tags, difficulties, question types, and aggregate stats
 */
export interface Metadata {
  /**
   *
   */
  success: boolean;
  /**
   *
   */
  data: Data;
}

/**
 *
 */
export interface Data {
  /**
   *
   */
  difficulties: string[];
  /**
   *
   */
  questionTypes: string[];
  /**
   *
   */
  categories: string[];
  /**
   *
   */
  tags: string[];
  /**
   *
   */
  stats: Stats;
}

/**
 *
 */
export interface Stats {
  /**
   *
   */
  totalQuizzes: number;
  /**
   *
   */
  totalQuestions: number;
}

export const HomePage = () => {
  // useEffect(() => {
  //   const getMetadata = async () => {
  //     const { data } = await instance.get<Metadata>('/metadata');

  //     console.log(data.);
  //   };

  //   getMetadata();
  // });

  return (
    <Box
      height="100dvh"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
    >
      <Box mt={6}>
        <ParallaxText baseVelocity={0.6}>QuizBeast</ParallaxText>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        zIndex={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign="center"
            mb={1}
            sx={(theme) => ({ color: theme.custom.textOnDark.primary })}
          >
            Ready to test your knowledge?
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h6"
            fontWeight={400}
            textAlign="center"
            mb={5}
            sx={(theme) => ({ color: theme.custom.textOnDark.secondary })}
          >
            Pick a category, choose your difficulty, and let`s go!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        >
          <Link to={pathKeys.quizzes()} style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                sx={(theme) => {
                  return {
                    width: '220px',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 2,
                    boxShadow: theme.custom.accent.glow,
                  };
                }}
              >
                List Quizzes
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </Box>

      <Box
        position="absolute"
        bottom={0}
        left="50%"
        height={700}
        width={600}
        sx={{ translate: '-50%' }}
        overflow="hidden"
        zIndex={0}
      >
        <SmileCouscousSvg style={{ opacity: 0.8 }} />
      </Box>
    </Box>
  );
};
