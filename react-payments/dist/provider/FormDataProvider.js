import { jsx as _jsx } from "react/jsx-runtime";
import CardNumberProvider from "provider/CardNumberProvider";
import CardPasswordProvider from "provider/CardPasswordProvider";
import CardTypeProvider from "provider/CardTypeProvider";
import ExpireDateProvider from "provider/ExpireDateProvider";
import SecurityCodeProvider from "provider/SecurityCodeProvider";
import UserNameProvider from "provider/UserNameProvider";
const FormDataProvider = ({ children }) => {
    return (_jsx(CardTypeProvider, { children: _jsx(CardNumberProvider, { children: _jsx(ExpireDateProvider, { children: _jsx(UserNameProvider, { children: _jsx(SecurityCodeProvider, { children: _jsx(CardPasswordProvider, { children: children }) }) }) }) }) }));
};
export default FormDataProvider;
//# sourceMappingURL=FormDataProvider.js.map