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
import CardControlButtonBox from "component/CardControlButtonBox/CardControlButtonBox.component";
import { action } from "@storybook/addon-actions";
export default {
    title: "CardControlButtonBox",
    component: CardControlButtonBox,
};
const Template = (args) => (_jsx(CardControlButtonBox, Object.assign({}, args)));
export const DefaultCardControlButtonBox = Template.bind({});
DefaultCardControlButtonBox.args = {
    handleEditCard: action("handleEditCard"),
    handleDeleteCard: () => __awaiter(void 0, void 0, void 0, function* () {
        action("handleDeleteCard")();
    }),
};
//# sourceMappingURL=CardControlButtonBox.stories.js.map