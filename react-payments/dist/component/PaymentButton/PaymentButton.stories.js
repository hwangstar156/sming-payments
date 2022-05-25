import { jsx as _jsx } from "react/jsx-runtime";
import PaymentButton from "component/PaymentButton/PaymentButton.component";
export default {
    title: "PaymentButton",
    component: PaymentButton,
};
const Template = (args) => _jsx(PaymentButton, Object.assign({}, args));
export const DefaultPaymentButton = Template.bind({});
DefaultPaymentButton.args = {
    children: "결제하기",
};
export const CancelPaymentButton = Template.bind({});
CancelPaymentButton.args = {
    children: "삭제하기",
};
//# sourceMappingURL=PaymentButton.stories.js.map