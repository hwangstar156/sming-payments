import { jsx as _jsx } from "react/jsx-runtime";
import ModalPortal from "component/common/ModalPortal/ModalPortal.component";
import Modal from "component/common/Modal/Modal.component";
import CardControlButtonBox from "component/CardControlButtonBox/CardControlButtonBox.component";
const CardControlModal = ({ toggleModal, type, handleEditCard, handleDeleteCard, }) => {
    return (_jsx(ModalPortal, { children: _jsx(Modal, Object.assign({ toggleModal: toggleModal, styleType: type }, { children: _jsx(CardControlButtonBox, { handleEditCard: handleEditCard, handleDeleteCard: handleDeleteCard }) })) }));
};
export default CardControlModal;
//# sourceMappingURL=CardControlModal.js.map