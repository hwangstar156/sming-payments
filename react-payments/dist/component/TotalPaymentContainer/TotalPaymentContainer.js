import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import Box from "styles/box";
import Text from "styles/text";
function TotalPaymentContainer({ price }) {
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "column", gap: "30px", pl: "32px", pr: "32px", width: "80%" }, { children: [_jsx(PaymentLabel, { children: "\uACB0\uC81C\uAE08\uC561" }), _jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between" }, { children: [_jsx(Text, Object.assign({ fontSize: "14px", fontWeight: "700", color: "#333333", underline: true }, { children: "\uCD1D \uACB0\uC81C\uAE08\uC561" })), _jsxs(Text, Object.assign({ fontSize: "14px", fontWeight: "700", color: "#333333", underline: true }, { children: [price, " \uC6D0"] }))] }))] })));
}
export default TotalPaymentContainer;
//# sourceMappingURL=TotalPaymentContainer.js.map