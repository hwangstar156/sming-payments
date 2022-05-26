import React, { useContext } from "react";
import styled from "styled-components";

import { PageRouterContext } from "../../provider/PageRouterProvier";
import CardAddPage from "../CardAddPage/CardAddPage.pages";
import CardRegisterPage from "../CardRegisterPage/CardRegisterPage.pages";
import PaymentPage from "../PaymentPage/PaymentPage.pages";

const RootPageContainer = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  position: relative;

  border-radius: 15px;
`;

const pages = {
  "/": (price: number, toggleModal: React.DispatchWithoutAction) => (
    <PaymentPage price={price} toggleModal={toggleModal} />
  ),
  "/add": () => <CardAddPage />,
  "/register": () => <CardRegisterPage />,
} as const;

function PageRouter({
  price,
  toggleModal,
}: {
  price?: number;
  toggleModal: React.DispatchWithoutAction;
}) {
  const pageRouterContext = useContext(PageRouterContext);
  if (!pageRouterContext) {
    throw new Error("cannot find PageRouter");
  }
  const { path } = pageRouterContext;
  return (
    <RootPageContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {path === "/" ? pages[path](price || 0, toggleModal) : pages[path]()}
      <div id="sming-payments-modal"></div>
    </RootPageContainer>
  );
}

export default PageRouter;
