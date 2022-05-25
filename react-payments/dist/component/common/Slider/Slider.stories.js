import { jsx as _jsx } from "react/jsx-runtime";
import Slider from "./Slider";
export default {
    title: "Slider",
    component: Slider,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { width: "375px" } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => _jsx(Slider, Object.assign({}, args));
export const DefaultSlider = Template.bind({});
//# sourceMappingURL=Slider.stories.js.map