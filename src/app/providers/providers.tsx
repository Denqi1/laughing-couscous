import { BrowserRouter } from './router';
import { CustomThemeProvider } from './theme';

export const Providers = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter />
    </CustomThemeProvider>
  );
};
