import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import Input from "component/common/Input/Input.component";
import InputBox from "component/common/InputBox/InputBox.component";
import ConnectorBox from "component/common/ConnectorBox/ConnectorBox.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import Label from "component/common/Label/Label.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import { ExpireDateContext } from "provider/ExpireDateProvider";
const ExpireDateContainer = memo(() => {
    const expireDateContext = useContext(ExpireDateContext);
    if (!expireDateContext) {
        throw new Error("Cannot find ExpireDateContext");
    }
    const { state: { expireDate, expireDateReady }, action: { onChangeExpireDate, onKeyDownExpireDate }, } = expireDateContext;
    return (_jsxs(_Fragment, { children: [_jsx(Label, { children: "\uB9CC\uB8CC\uC77C" }), _jsxs(InputBox, Object.assign({ formType: "expire-date" }, { children: [_jsx(Input, { type: "number", placeholder: "MM", name: "month", value: expireDate.month, onChange: onChangeExpireDate, onKeyDown: onKeyDownExpireDate, "data-testid": "expire-date-0" }), _jsx(ConnectorBox, { children: "/" }), _jsx(Input, { type: "number", placeholder: "YY", name: "year", value: expireDate.year, onChange: onChangeExpireDate, onKeyDown: onKeyDownExpireDate, "data-testid": "expire-date-1" })] })), expireDateReady ? (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE }))) : (_jsxs(MessageBox, Object.assign({ styleType: "error" }, { children: [ERROR_MESSAGE["expire-date"], " "] })))] }));
});
export default ExpireDateContainer;
//# sourceMappingURL=ExpireDateContainer.component.js.map