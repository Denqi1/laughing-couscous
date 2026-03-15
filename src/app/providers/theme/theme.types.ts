import type { Theme, ThemeOptions } from '@mui/material/styles';

/**
 * Custom theme tokens for QuizBeast (glass surfaces, accent, text on dark).
 * Extend these in theme.ts and use via theme.custom in sx.
 */
export interface CustomThemeTokens {
  /**
   * Glass-style surfaces (cards, panels).
   */
  glass: {
    /**
     * Card background gradient (default strength).
     */
    background: string;
    /**
     * Stronger glass (e.g. 0.12 → 0.04).
     */
    backgroundStrong: string;
    /**
     * Default glass border.
     */
    border: string;
    /**
     * Subtle divider/border.
     */
    borderSubtle: string;
  };
  /**
   * Accent (orange) for hover, chips, buttons.
   */
  accent: {
    /**
     * Box shadow for buttons / primary actions.
     */
    glow: string;
    /**
     * Box shadow on card hover.
     */
    glowHover: string;
    /**
     * Chip/overlay background.
     */
    overlay: string;
    /**
     * Accent border.
     */
    border: string;
    /**
     * Border on hover.
     */
    borderHover: string;
  };
  /**
   * Text on dark background (semantic aliases).
   */
  textOnDark: {
    /**
     * Primary heading/text.
     */
    primary: string;
    /**
     * Muted (e.g. 0.7 opacity).
     */
    muted: string;
    /**
     * Secondary info (e.g. 0.6).
     */
    secondary: string;
    /**
     * Subtle (e.g. 0.5).
     */
    subtle: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomThemeTokens;
  }

  interface ThemeOptions {
    custom?: Partial<CustomThemeTokens>;
  }
}

export type { Theme, ThemeOptions };
