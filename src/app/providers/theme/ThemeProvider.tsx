import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import type { CustomThemeProviderProps } from './ThemeProvider.types';
import { appTheme } from './theme';

import './theme.colors.css';

export const CustomThemeProvider = (props: CustomThemeProviderProps) => {
  const { children } = props;

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};
