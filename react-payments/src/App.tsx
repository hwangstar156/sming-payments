import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./component/common/Errorboundary/Errorboundary";
import FormDataProvider from "./provider/FormDataProvider";
import CardDataProvider from "./provider/CardDataProvider";
import ErrorProvider from "./provider/ErrorContext";
import theme from "./styles/theme";
import ErrorPage from "./pages/ErrorPage/ErrorPage.pages";
import PageRouterProvider from "./provider/PageRouterProvier";
import PageRouter from "./pages/PageRouter/PageRouter";
import GlobalStyle from "./styles/GlobalStyle";

function App({ price }: { price?: number }) {
  return (
    <FormDataProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <CardDataProvider>
            <ErrorProvider>
              <PageRouterProvider>
                <PageRouter price={price} />
                <div id="sming-payments-modal"></div>
              </PageRouterProvider>
            </ErrorProvider>
          </CardDataProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </FormDataProvider>
  );
}

export default App;
