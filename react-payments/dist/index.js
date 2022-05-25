import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage/ErrorPage.pages";
import App from "App";
import CardDataProvider from "provider/CardDataProvider";
import theme from "styles/theme";
import "./index.css";
import ErrorProvider from "provider/ErrorContext";
import ErrorBoundary from "component/common/Errorboundary/Errorboundary";
import FormDataProvider from "provider/FormDataProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(BrowserRouter, Object.assign({ basename: "react-payments" }, { children: _jsx(ThemeProvider, Object.assign({ theme: theme }, { children: _jsx(ErrorBoundary, Object.assign({ fallback: _jsx(ErrorPage, {}) }, { children: _jsx(FormDataProvider, { children: _jsx(CardDataProvider, { children: _jsx(ErrorProvider, { children: _jsx(App, {}) }) }) }) })) })) })));
//# sourceMappingURL=index.js.map