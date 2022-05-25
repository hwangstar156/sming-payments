import { Route, Routes } from "react-router";
import CardAddPage from "pages/CardAddPage/CardAddPage.pages";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage.pages";
import NoRoutePage from "pages/NoRoutePage/NoRoutePage.pages";
import PaymentPage from "pages/PaymentPage/PaymentPage.pages";

function App({ price }: { price?: number }) {
  return (
    <Routes>
      <Route path="/" element={<PaymentPage price={price} />} />
      <Route path="/*" element={<NoRoutePage />} />
      <Route path="/add" element={<CardAddPage />} />
      <Route path="/add/:id" element={<CardAddPage />} />
      <Route path="/register" element={<CardRegisterPage />} />
    </Routes>
  );
}

export default App;
