import { PageRouterContext } from "../../provider/PageRouterProvier";
import { useContext } from "react";
import CardAddPage from "../CardAddPage/CardAddPage.pages";
import CardRegisterPage from "../CardRegisterPage/CardRegisterPage.pages";
import NoRoutePage from "../NoRoutePage/NoRoutePage.pages";
import PaymentPage from "../PaymentPage/PaymentPage.pages";

const pages = {
  "/": (price: number) => <PaymentPage price={price} />,
  "/add": () => <CardAddPage />,
  "/register": () => <CardRegisterPage />,
} as const;

function PageRouter({ price }: { price?: number }) {
  const pageRouterContext = useContext(PageRouterContext);
  if (!pageRouterContext) {
    throw new Error("cannot find PageRouter");
  }
  const { path } = pageRouterContext;
  return <>{path === "/" ? pages[path](price || 0) : pages[path]()}</>;
}

export default PageRouter;
