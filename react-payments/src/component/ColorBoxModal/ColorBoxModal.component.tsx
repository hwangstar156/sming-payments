import { DispatchWithoutAction } from "react";

import CardTypeSelector from "../CardTypeSelector/CardTypeSelector.component";
import Modal from "../common/Modal/Modal.component";
import ModalPortal from "../common/ModalPortal/ModalPortal.component";

const ColorBoxModal = ({
  toggleModal,
}: {
  toggleModal: DispatchWithoutAction;
}) => {
  return (
    <ModalPortal>
      <Modal toggleModal={toggleModal}>
        <CardTypeSelector />
      </Modal>
    </ModalPortal>
  );
};

export default ColorBoxModal;
