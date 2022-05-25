import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Input from "component/common/Input/Input.component";
import ConnectorBox from "component/common/ConnectorBox/ConnectorBox.component";
import InputBox from "component/common/InputBox/InputBox.component";
export default {
    title: "Common/InputBox",
    component: InputBox,
};
export const CardNumberInput = (args) => (_jsxs(InputBox, Object.assign({}, args, { children: [_jsx(Input, { type: "number" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "number" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "password" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "password" })] })));
CardNumberInput.args = {
    formType: "card-number",
};
export const ExpireDateInput = (args) => (_jsxs(InputBox, Object.assign({}, args, { children: [_jsx(Input, { type: "number", placeholder: "MM" }), _jsx(ConnectorBox, { children: "/" }), _jsx(Input, { type: "number", placeholder: "YY" })] })));
ExpireDateInput.args = {
    formType: "expire-date",
};
export const UserNameInput = (args) => (_jsx(InputBox, Object.assign({}, args, { children: _jsx(Input, { type: "text", placeholder: "\uCE74\uB4DC\uC5D0 \uD45C\uC2DC\uB41C \uC774\uB984\uACFC \uB3D9\uC77C\uD558\uAC8C \uC785\uB825\uD558\uC138\uC694." }) })));
UserNameInput.args = {
    formType: "user-name",
};
export const SecurityCodeInput = (args) => (_jsx(InputBox, Object.assign({}, args, { children: _jsx(Input, { type: "password" }) })));
SecurityCodeInput.args = {
    formType: "security-code",
};
export const CardPasswordInput = (args) => (_jsx(InputBox, Object.assign({}, args, { children: _jsx(Input, { type: "password" }) })));
CardPasswordInput.args = {
    formType: "card-password",
};
//# sourceMappingURL=InputBox.stories.js.map