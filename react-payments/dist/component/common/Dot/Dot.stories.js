import { jsx as _jsx } from "react/jsx-runtime";
import Dot from "component/common/Dot/Dot.component";
export default {
    title: "Common/Dot",
    component: Dot,
};
const Template = (args) => _jsx(Dot, Object.assign({}, args));
export const PasswordDot = Template.bind({});
PasswordDot.args = {
    styleSize: "small",
    formType: "card-password",
};
export const CardNumberDot = Template.bind({});
CardNumberDot.args = {
    styleSize: "small",
    formType: "card-number",
};
export const ColorBoxDot = Template.bind({});
ColorBoxDot.args = {
    styleSize: "huge",
    cardType: "pocoCard",
};
//# sourceMappingURL=Dot.stories.js.map