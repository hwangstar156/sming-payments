import { jsx as _jsx } from "react/jsx-runtime";
import CardSlider from "./CardSlider";
export default {
    title: "CardSlider",
    component: CardSlider,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { width: "375px" } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => _jsx(CardSlider, Object.assign({}, args));
export const DefaultCardSlider = Template.bind({});
//# sourceMappingURL=CardSlider.stories.js.map