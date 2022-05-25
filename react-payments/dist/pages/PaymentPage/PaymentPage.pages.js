import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TermsOfUseContainer from "component/TermsOfUseContainer/TermsOfUseContainer";
import TotalPaymentContainer from "component/TotalPaymentContainer/TotalPaymentContainer";
import CardSlider from "component/CardSlider/CardSlider";
import { ColumnFlexWrapper, RowFlexWrapper } from "styles/wrapper";
import PaymentButton from "component/PaymentButton/PaymentButton.component";
import { useState } from "react";
function PaymentPage({ price }) {
    const [checked, setChecked] = useState(false);
    return (_jsxs(ColumnFlexWrapper, Object.assign({ width: "375px", gap: "50" }, { children: [_jsx(CardSlider, {}), _jsx(TotalPaymentContainer, { price: price }), _jsx(TermsOfUseContainer, { setChecked: setChecked }), _jsxs(RowFlexWrapper, Object.assign({ gap: "25" }, { children: [_jsx(PaymentButton, Object.assign({ checked: checked }, { children: "\uACB0\uC81C\uD558\uAE30" })), _jsx(PaymentButton, { children: "\uCDE8\uC18C\uD558\uAE30" })] }))] })));
}
export default PaymentPage;
//# sourceMappingURL=PaymentPage.pages.js.map