import { BrowserRouter } from './router-provider';
import { CustomThemeProvider } from './theme-provider';

export function Providers() {
  return (
    <CustomThemeProvider>
      <BrowserRouter />
    </CustomThemeProvider>
  );
}
