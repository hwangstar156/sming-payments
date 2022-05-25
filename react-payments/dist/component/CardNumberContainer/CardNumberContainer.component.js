import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import ConnectorBox from "component/common/ConnectorBox/ConnectorBox.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import { CardNumberContext } from "provider/CardNumberProvider";
const CardNumberContainer = memo(() => {
    const cardNumberContext = useContext(CardNumberContext);
    if (!cardNumberContext) {
        throw new Error("Cannot find CardNumberContext");
    }
    const { state: { cardNumber, cardNumberReady }, action: { onChangeCardNumber, onKeyDownCardNumber }, } = cardNumberContext;
    return (_jsxs(_Fragment, { children: [_jsx(Label, { children: "\uCE74\uB4DC \uBC88\uD638" }), _jsxs(InputBox, Object.assign({ formType: "card-number" }, { children: [_jsx(Input, { type: "number", name: "first", value: cardNumber["first"], onChange: onChangeCardNumber, onKeyDown: onKeyDownCardNumber, "data-testid": "card-number-0" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "number", name: "second", value: cardNumber["second"], onChange: onChangeCardNumber, onKeyDown: onKeyDownCardNumber, "data-testid": "card-number-1" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "password", name: "third", value: cardNumber["third"], onChange: onChangeCardNumber, onKeyDown: onKeyDownCardNumber, "data-testid": "card-number-2" }), _jsx(ConnectorBox, { children: "-" }), _jsx(Input, { type: "password", name: "fourth", value: cardNumber["fourth"], onChange: onChangeCardNumber, onKeyDown: onKeyDownCardNumber, "data-testid": "card-number-3" })] })), cardNumberReady ? (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE }))) : (_jsxs(MessageBox, Object.assign({ styleType: "error" }, { children: [ERROR_MESSAGE["card-number"], " "] })))] }));
});
export default CardNumberContainer;
//# sourceMappingURL=CardNumberContainer.component.js.map