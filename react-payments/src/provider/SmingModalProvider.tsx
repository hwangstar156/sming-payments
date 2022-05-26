import React, { createContext, useReducer } from "react";

interface InitialContextValue {
  isShowModal: boolean;
  toggleModal: React.DispatchWithoutAction;
}

export const SmingModalContext =
  createContext<InitialContextValue | null>(null);

function SmingModalProvider({ children }: { children: React.ReactNode }) {
  const [isShowModal, toggleModal] = useReducer((prev) => !prev, false);
  return (
    <SmingModalContext.Provider value={{ isShowModal, toggleModal }}>
      {children}
    </SmingModalContext.Provider>
  );
}

export default SmingModalProvider;
