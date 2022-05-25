import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import styled from "styled-components";
import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import HelpBox from "component/common/HelpBox/HelpBox.component";
import useKeyboardOn from "hooks/useKeyboardOn";
import VirtualKeyboard from "component/common/VirtualKeyboard/VirtualKeyboard.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
const SecurityCodeInputGroup = styled.div `
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
`;
const SecurityCodeContainer = memo(() => {
    const securityCodeContext = useContext(SecurityCodeContext);
    if (!securityCodeContext) {
        throw new Error("Cannot find SecurityCodeContext");
    }
    const { state: { securityCode, securityCodeReady }, action: { onChangeSecurityCode, onClickSecurityVirtualKeyboard, onClickSecurityBackspaceButton, }, } = securityCodeContext;
    const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } = useKeyboardOn(securityCodeReady);
    return (_jsxs(_Fragment, { children: [_jsx(Label, { children: "\uBCF4\uC548 \uCF54\uB4DC(CVC/CVV)" }), _jsxs(SecurityCodeInputGroup, { children: [_jsx(InputBox, Object.assign({ formType: "security-code" }, { children: _jsx(Input, { type: "password", value: securityCode, onChange: onChangeSecurityCode, onFocus: openKeyboard, onKeyDown: onKeyDown, "data-testid": "security-code" }) })), _jsx(HelpBox, {}), keyboardOn && (_jsx(VirtualKeyboard, { onClickVirtualKeyboard: onClickSecurityVirtualKeyboard, onClickBackspaceButton: onClickSecurityBackspaceButton, onClickCloseButton: closeKeyboard }))] }), securityCodeReady ? (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE }))) : (_jsxs(MessageBox, Object.assign({ styleType: "error" }, { children: [ERROR_MESSAGE["security-code"], " "] })))] }));
});
export default SecurityCodeContainer;
//# sourceMappingURL=SecurityCodeContainer.component.js.map