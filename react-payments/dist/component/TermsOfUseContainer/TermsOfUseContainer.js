import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ToggleButton from "component/common/ToggleButton/ToggleButton";
import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import Box from "styles/box";
import Text from "styles/text";
function TermsOfUseContainer({ setChecked, }) {
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "column", gap: "30px", pl: "32px", pr: "32px", width: "80%" }, { children: [_jsx(PaymentLabel, { children: "\uC57D\uAD00 \uC774\uC6A9 \uBC0F \uB3D9\uC758" }), _jsx(Text, Object.assign({ fontSize: "10px", fontWeight: "700", color: "#333333" }, { children: "\uAC70\uB798\uC815\uBCF4 \uC81C\uACF5 \uB3D9\uC758 alming store" })), _jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between" }, { children: [_jsx(Text, Object.assign({ fontSize: "10px", fontWeight: "700", color: "#333333" }, { children: "\uC8FC\uBB38 \uB0B4\uC6A9\uC744 \uD655\uC778\uD558\uC600\uC73C\uBA70, \uC815\uBCF4 \uC81C\uACF5 \uB4F1\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4." })), _jsx(ToggleButton, { setChecked: setChecked })] }))] })));
}
export default TermsOfUseContainer;
//# sourceMappingURL=TermsOfUseContainer.js.map