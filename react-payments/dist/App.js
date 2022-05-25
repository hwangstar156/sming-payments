import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router";
import CardAddPage from "pages/CardAddPage/CardAddPage.pages";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage.pages";
import NoRoutePage from "pages/NoRoutePage/NoRoutePage.pages";
import PaymentPage from "pages/PaymentPage/PaymentPage.pages";
function App({ price }) {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(PaymentPage, { price: price }) }), _jsx(Route, { path: "/*", element: _jsx(NoRoutePage, {}) }), _jsx(Route, { path: "/add", element: _jsx(CardAddPage, {}) }), _jsx(Route, { path: "/add/:id", element: _jsx(CardAddPage, {}) }), _jsx(Route, { path: "/register", element: _jsx(CardRegisterPage, {}) })] }));
}
export default App;
//# sourceMappingURL=App.js.map