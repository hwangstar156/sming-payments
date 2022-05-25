import { jsx as _jsx } from "react/jsx-runtime";
import { action } from "@storybook/addon-actions";
import VirtualKeyboard from "component/common/VirtualKeyboard/VirtualKeyboard.component";
export default {
    title: "Common/VirtualKeyboard",
    component: VirtualKeyboard,
};
const Template = (args) => (_jsx(VirtualKeyboard, Object.assign({}, args)));
export const DefaultVirtualKeyboard = Template.bind({});
DefaultVirtualKeyboard.args = {
    onClickVirtualKeyboard: action("clickVirtualKeyboard"),
    onClickCloseButton: action("clickCloseButton"),
    onClickBackspaceButton: action("clickBackSpaceButton"),
};
//# sourceMappingURL=VirtualKeyboard.stories.js.map