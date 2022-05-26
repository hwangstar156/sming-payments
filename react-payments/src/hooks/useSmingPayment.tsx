import { useContext } from "react";
import { ModalContext } from "../provider/ModalProvider";

function useSmingPayment() {
  const modalProvider = useContext(ModalContext);
  if (!modalProvider) {
    throw new Error("cannot find modalProvider");
  }
  const { isShowModal, toggleModal } = modalProvider;
  return [isShowModal, toggleModal];
}

export default useSmingPayment;
