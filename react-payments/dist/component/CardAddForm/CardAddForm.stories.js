import { jsx as _jsx } from "react/jsx-runtime";
import CardAddForm from "./CardAddForm.component";
import { action } from "@storybook/addon-actions";
export default {
    title: "CardAddForm",
    component: CardAddForm,
};
export const DefaultCardAddForm = (args) => (_jsx(CardAddForm, Object.assign({}, args)));
DefaultCardAddForm.args = {
    toggleShowModal: action("toggleShowModal"),
    id: undefined,
};
//# sourceMappingURL=CardAddForm.stories.js.map