import { jsx as _jsx } from "react/jsx-runtime";
import TermsOfUseContainer from "./TermsOfUseContainer";
import { action } from "@storybook/addon-actions";
export default {
    title: "TermsOfUseContainer",
    component: TermsOfUseContainer,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { width: "375px" } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => _jsx(TermsOfUseContainer, Object.assign({}, args));
export const DefaultTermsOfUseContainer = Template.bind({});
DefaultTermsOfUseContainer.args = {
    setChecked: action("setChecked"),
};
//# sourceMappingURL=TermsOfUseContainer.stories.js.map