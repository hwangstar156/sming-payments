import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ModalButton from "component/common/ModalButton/ModalButton.component";
import { RowFlexWrapper } from "styles/wrapper";
const CardControlButtonBox = ({ handleEditCard, handleDeleteCard, }) => {
    return (_jsxs(RowFlexWrapper, Object.assign({ gap: "25" }, { children: [_jsx(ModalButton, Object.assign({ styleType: "edit", onClick: handleEditCard }, { children: "\uC218\uC815\uD558\uAE30" })), _jsx(ModalButton, Object.assign({ styleType: "delete", onClick: handleDeleteCard }, { children: "\uC0AD\uC81C\uD558\uAE30" }))] })));
};
export default CardControlButtonBox;
//# sourceMappingURL=CardControlButtonBox.component.js.map