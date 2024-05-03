import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

type CustomThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    // primary: {
    //   main: '#5a1e96',
    //   light: '#6f4796',
    //   dark: '#42067d',
    //   contrastText: '#fff',
    // },
    secondary: {
      main: '#e87238',
      light: '#e38b5f',
      dark: '#d94e09',
      contrastText: '#fff',
    },
    background: {
      default: '#5a1e96',
    },
  },
  typography: {
    allVariants: {
      color: '#e8e7e6',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#5A1E96',
          fontSize: '18px',
        },
      },
    },
  },
});

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
