import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';

import { QuizCardProps } from './QuizCard.types';

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const QuizCard = (props: QuizCardProps) => {
  const {
    quiz: {
      questionCount,
      category,
      description,
      difficulty,
      id,
      plays,
      tags,
      title,
    },
  } = props;

  return (
    <Grid item xs={4} sm={4} md={4} key={id}>
      <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
        <Card
          sx={(theme) => {
            return {
              background: theme.custom.glass.background,
              backdropFilter: 'blur(10px)',
              border: theme.custom.glass.border,
              cursor: 'default',
              borderRadius: 3,
              '&:hover': {
                borderColor: theme.custom.accent.borderHover,
                boxShadow: theme.custom.accent.glowHover,
              },
            };
          }}
        >
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              lineHeight={1.3}
              sx={(theme) => {
                return {
                  color: theme.custom.textOnDark.primary,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                };
              }}
            >
              {title}
            </Typography>

            {description !== null && description !== '' && (
              <Typography
                variant="body2"
                sx={(theme) => {
                  return {
                    color: theme.custom.textOnDark.muted,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    fontSize: '0.85rem',
                  };
                }}
              >
                {description}
              </Typography>
            )}

            <Box display="flex" flexWrap="wrap" gap={0.75}>
              <Chip
                label={category}
                size="small"
                sx={(theme) => {
                  return {
                    textTransform: 'capitalize',
                    fontSize: '0.7rem',
                    height: 22,
                    bgcolor: theme.custom.accent.overlay,
                    color: theme.custom.textOnDark.primary,
                    border: theme.custom.accent.border,
                  };
                }}
              />
              <Chip
                label={difficulty}
                size="small"
                sx={(theme) => {
                  return {
                    textTransform: 'capitalize',
                    fontSize: '0.7rem',
                    height: 22,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: theme.custom.textOnDark.muted,
                    border: '1px solid rgba(255,255,255,0.2)',
                  };
                }}
              />
            </Box>

            <Divider />

            <Box display="flex" alignItems="center" gap={1}>
              <Typography
                variant="caption"
                sx={(theme) => ({
                  color: theme.custom.textOnDark.secondary,
                })}
              >
                {questionCount} questions
              </Typography>
              <Typography
                variant="caption"
                sx={(theme) => ({
                  color: theme.custom.textOnDark.secondary,
                })}
              >
                {plays} plays
              </Typography>
            </Box>

            {tags.length > 0 && (
              <Box display="flex" flexWrap="wrap" gap={0.5}>
                {tags.slice(0, 3).map((tag) => {
                  return (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={(theme) => {
                        return {
                          fontSize: '0.65rem',
                          height: 20,
                          bgcolor: 'transparent',
                          color: theme.custom.textOnDark.subtle,
                          border: '1px solid rgba(255,255,255,0.15)',
                        };
                      }}
                    />
                  );
                })}
              </Box>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};
