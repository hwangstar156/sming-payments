import { jsx as _jsx } from "react/jsx-runtime";
import Input from "component/common/Input/Input.component";
export default {
    title: "Common/Input",
    component: Input,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { width: "120px" } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => _jsx(Input, Object.assign({}, args));
export const DefaultInput = Template.bind({});
DefaultInput.args = {
    type: "number",
    placeholder: "number-input",
};
//# sourceMappingURL=Input.stories.js.map