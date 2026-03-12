import type { ReactNode } from 'react';

/**
 * Props for the app theme provider wrapper.
 */
export interface CustomThemeProviderProps {
  /**
   * React subtree that receives the theme context.
   */
  children: ReactNode;
}
