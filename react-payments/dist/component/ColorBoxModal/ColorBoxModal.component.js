import { jsx as _jsx } from "react/jsx-runtime";
import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import Modal from "component/common/Modal/Modal.component";
import ModalPortal from "../common/ModalPortal/ModalPortal.component";
const ColorBoxModal = ({ toggleModal, }) => {
    return (_jsx(ModalPortal, { children: _jsx(Modal, Object.assign({ toggleModal: toggleModal }, { children: _jsx(CardTypeSelector, {}) })) }));
};
export default ColorBoxModal;
//# sourceMappingURL=ColorBoxModal.component.js.map