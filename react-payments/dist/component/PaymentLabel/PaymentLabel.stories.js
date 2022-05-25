import { jsx as _jsx } from "react/jsx-runtime";
import PaymentLabel from "component/PaymentLabel/PaymentLabel";
export default {
    title: "PaymentLabel",
    component: PaymentLabel,
};
const Template = (args) => _jsx(PaymentLabel, Object.assign({}, args));
export const TermsOfUseLabel = Template.bind({});
TermsOfUseLabel.args = {
    children: "약간 이용 및 동의",
};
export const DefaultPaymentLabel = Template.bind({});
DefaultPaymentLabel.args = {
    children: "결제금액",
};
export const HoldingCardLabel = Template.bind({});
HoldingCardLabel.args = {
    as: "span",
    styleType: "holding-card",
    children: "보유카드",
};
//# sourceMappingURL=PaymentLabel.stories.js.map