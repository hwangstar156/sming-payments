import { jsx as _jsx } from "react/jsx-runtime";
import ModalButton from "component/common/ModalButton/ModalButton.component";
export default {
    title: "Common/ModalButton",
    component: ModalButton,
};
export const EditModalButton = (args) => _jsx(ModalButton, Object.assign({}, args, { children: "\uC218\uC815\uD558\uAE30" }));
EditModalButton.args = {
    styleType: "edit",
};
export const DeleteModalButton = (args) => _jsx(ModalButton, Object.assign({}, args, { children: "\uC0AD\uC81C\uD558\uAE30" }));
DeleteModalButton.args = {
    styleType: "delete",
};
//# sourceMappingURL=ModalButton.stories.js.map