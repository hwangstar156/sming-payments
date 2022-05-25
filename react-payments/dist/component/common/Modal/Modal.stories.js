var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { action } from "@storybook/addon-actions";
import Modal from "component/common/Modal/Modal.component";
import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import CardControlButtonBox from "../../CardControlButtonBox/CardControlButtonBox.component";
export default {
    title: "Common/Modal",
    component: Modal,
};
export const CardTypeSelectorModal = (args) => (_jsx(Modal, Object.assign({}, args, { children: _jsx(CardTypeSelector, {}) })));
CardTypeSelectorModal.args = {
    toggleModal: action("toggled"),
};
export const CardControlModal = (args) => (_jsx(Modal, Object.assign({}, args, { styleType: "edit" }, { children: _jsx(CardControlButtonBox, { handleDeleteCard: () => __awaiter(void 0, void 0, void 0, function* () {
            action("handleDeleteCard")();
        }), handleEditCard: () => {
            action("handleEditCard");
        } }) })));
CardControlModal.args = {
    toggleModal: action("toggled"),
};
//# sourceMappingURL=Modal.stories.js.map