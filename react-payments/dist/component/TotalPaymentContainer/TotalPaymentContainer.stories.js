import { jsx as _jsx } from "react/jsx-runtime";
import TotalPaymentContainer from "./TotalPaymentContainer";
export default {
    title: "TotalPaymentContainer",
    component: TotalPaymentContainer,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { width: "375px" } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => (_jsx(TotalPaymentContainer, Object.assign({}, args)));
export const DefaultTotalPaymentContainer = Template.bind({});
DefaultTotalPaymentContainer.args = {
    price: 326000,
};
//# sourceMappingURL=TotalPaymentContainer.stories.js.map