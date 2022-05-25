import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import Dot from "component/common/Dot/Dot.component";
import VirtualKeyboard from "component/common/VirtualKeyboard/VirtualKeyboard.component";
import useKeyboardOn from "hooks/useKeyboardOn";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import Box from "styles/box";
const CardPasswordContainer = memo(() => {
    const cardPasswordContext = useContext(CardPasswordContext);
    if (!cardPasswordContext) {
        throw new Error("Cannot find CardPasswordContext");
    }
    const { state: { cardPassword, cardPasswordReady }, action: { onChangeCardPassword, onClickCardPasswordBackspaceButton, onClickCardPasswordVirtualKeyboard, }, } = cardPasswordContext;
    const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } = useKeyboardOn(cardPasswordReady);
    return (_jsxs(_Fragment, { children: [_jsx(Label, { children: "\uCE74\uB4DC \uBE44\uBC00\uBC88\uD638" }), _jsxs(Box, Object.assign({ display: "flex", alignItems: "center", gap: "10px", position: "relative" }, { children: [_jsx(InputBox, Object.assign({ formType: "card-password" }, { children: _jsx(Input, { type: "password", value: cardPassword["first"], onChange: onChangeCardPassword, onKeyDown: onKeyDown, onFocus: openKeyboard, "data-testid": "card-password" }) })), _jsx(InputBox, Object.assign({ formType: "card-password" }, { children: _jsx(Input, { type: "password", value: cardPassword["second"], onChange: onChangeCardPassword, onKeyDown: onKeyDown, onFocus: openKeyboard, "data-testid": "card-password" }) })), _jsx(Dot, { styleSize: "small", formType: "card-password", cardType: "defaultCard" }), _jsx(Dot, { styleSize: "small", formType: "card-password", cardType: "defaultCard" }), keyboardOn && (_jsx(VirtualKeyboard, { onClickVirtualKeyboard: onClickCardPasswordVirtualKeyboard, onClickCloseButton: closeKeyboard, onClickBackspaceButton: onClickCardPasswordBackspaceButton }))] })), cardPasswordReady ? (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE }))) : (_jsxs(MessageBox, Object.assign({ styleType: "error" }, { children: [ERROR_MESSAGE["card-password"], " "] })))] }));
});
export default CardPasswordContainer;
//# sourceMappingURL=CardPasswordContainer.component.js.map