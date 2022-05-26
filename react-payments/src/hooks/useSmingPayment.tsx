import { useContext } from "react";
import { SmingModalContext } from "../provider/SmingModalProvider";

function useSmingPayment() {
  const smingModalContext = useContext(SmingModalContext);
  if (smingModalContext === null) {
    throw new Error("cannot find smingModalContext");
  }
  const { isShowModal, toggleModal } = smingModalContext;
  return { isShowModal, toggleModal };
}

export default useSmingPayment;
