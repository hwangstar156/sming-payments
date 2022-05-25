import { jsx as _jsx } from "react/jsx-runtime";
import ToggleButton from "component/common/ToggleButton/ToggleButton";
import { action } from "@storybook/addon-actions";
export default {
    title: "Common/ToggleButton",
    component: ToggleButton,
};
const Template = (args) => _jsx(ToggleButton, Object.assign({}, args));
export const DefaultToggleButton = Template.bind({});
DefaultToggleButton.args = {
    setChecked: action("setChecked"),
};
//# sourceMappingURL=ToggleButton.stories.js.map