import { jsx as _jsx } from "react/jsx-runtime";
import HelpBox from "component/common/HelpBox/HelpBox.component";
import { userEvent, within } from "@storybook/testing-library";
export default {
    title: "Common/HelpBox",
    component: HelpBox,
};
export const DefaultHelpBox = (args) => _jsx(HelpBox, Object.assign({}, args));
export const HoverHelpBox = DefaultHelpBox.bind({});
HoverHelpBox.play = ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.hover(canvas.getByRole("button", { hidden: true }));
};
//# sourceMappingURL=HelpBox.stories.js.map