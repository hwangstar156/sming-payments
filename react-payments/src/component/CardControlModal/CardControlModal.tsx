import ModalPortal from "../common/ModalPortal/ModalPortal.component";
import Modal from "../common/Modal/Modal.component";
import CardControlButtonBox from "../CardControlButtonBox/CardControlButtonBox.component";
import { DispatchWithoutAction } from "react";

export interface CardControlModalProps {
  toggleModal: DispatchWithoutAction;
  type?: string;
  handleEditCard: () => void;
  handleDeleteCard: () => Promise<void>;
}

const CardControlModal = ({
  toggleModal,
  type,
  handleEditCard,
  handleDeleteCard,
}: CardControlModalProps) => {
  return (
    <ModalPortal elementId="sming-payments-modal">
      <Modal toggleModal={toggleModal} styleType={type}>
        <CardControlButtonBox
          handleEditCard={handleEditCard}
          handleDeleteCard={handleDeleteCard}
        />
      </Modal>
    </ModalPortal>
  );
};

export default CardControlModal;
