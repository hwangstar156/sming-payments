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
import ModalPortal from "./component/common/ModalPortal/ModalPortal.component";
import Modal from "./component/common/Modal/Modal.component";
import { useReducer } from "react";

function App({ price }: { price?: number }) {
  const [isShowModal, toggleModal] = useReducer((prev) => !prev, true);

  return isShowModal ? (
    <FormDataProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <CardDataProvider>
            <ErrorProvider>
              <PageRouterProvider>
                <ModalPortal elementId="modal">
                  <Modal toggleModal={toggleModal} modalType="global-modal">
                    <PageRouter price={price} toggleModal={toggleModal} />
                  </Modal>
                </ModalPortal>
              </PageRouterProvider>
            </ErrorProvider>
          </CardDataProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </FormDataProvider>
  ) : null;
}

export default App;
