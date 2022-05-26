import { createContext, useReducer } from "react";

interface InitialContextValue {
  isShowModal: boolean;
  toggleModal: React.DispatchWithoutAction;
}

export const ModalContext = createContext<InitialContextValue | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShowModal, toggleModal] = useReducer((prev) => !prev, false);
  return (
    <ModalContext.Provider value={{ isShowModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
