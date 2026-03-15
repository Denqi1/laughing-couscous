import { createTheme } from '@mui/material/styles';

import type { CustomThemeTokens, Theme } from './theme.types';

/**
 * Palette/typography values for MUI (must be hex/rgba — MUI does not accept var() here).
 * Keep in sync with theme.colors.css when changing colors.
 */
const paletteColors = {
  backgroundDefault: '#5a1e96',
  textDefault: '#e8e7e6',
  secondaryMain: '#e87238',
  secondaryLight: '#e38b5f',
  secondaryDark: '#d94e09',
} as const;

/**
 * Custom tokens reference CSS variables from theme.colors.css.
 * Edit colors in theme.colors.css to change the app look.
 */
const custom: CustomThemeTokens = {
  glass: {
    background: 'var(--glass-background)',
    backgroundStrong: 'var(--glass-background-strong)',
    border: 'var(--glass-border)',
    borderSubtle: 'var(--glass-border-subtle)',
  },
  accent: {
    glow: 'var(--accent-glow)',
    glowHover: 'var(--accent-glow-hover)',
    overlay: 'var(--accent-overlay)',
    border: 'var(--accent-border)',
    borderHover: 'var(--accent-border-hover)',
  },
  textOnDark: {
    primary: 'var(--color-text-primary)',
    muted: 'var(--color-text-muted)',
    secondary: 'var(--color-text-secondary)',
    subtle: 'var(--color-text-subtle)',
  },
};

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: paletteColors.backgroundDefault,
    },
    secondary: {
      main: paletteColors.secondaryMain,
      light: paletteColors.secondaryLight,
      dark: paletteColors.secondaryDark,
      contrastText: '#fff',
    },
    background: {
      default: paletteColors.backgroundDefault,
    },
  },
  typography: {
    allVariants: {
      color: paletteColors.textDefault,
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: paletteColors.backgroundDefault,
          fontSize: '18px',
        },
      },
    },
  },
});

export const appTheme: Theme = {
  ...baseTheme,
  custom,
};
