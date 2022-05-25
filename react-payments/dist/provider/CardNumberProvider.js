import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import { isInValidCardNumber, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import useReady from "hooks/useReady";
import { MAX_LENGTH } from "constants/index";
export const CardNumberContext = createContext(null);
const initialState = {
    first: "",
    second: "",
    third: "",
    fourth: "",
};
const CardNumberProvider = ({ children }) => {
    const [cardNumber, setCardNumber] = useState(initialState);
    const [cardNumberReady] = useReady(cardNumber, isInValidCardNumber);
    const onChangeCardNumber = ({ target }) => {
        var _a;
        if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
            return;
        }
        const element = (_a = target.nextSibling) === null || _a === void 0 ? void 0 : _a.nextSibling;
        if (element) {
            focusNextElement({
                target,
                value: cardNumber,
                maxLength: MAX_LENGTH.CARD_NUMBER,
                element,
            });
        }
        setCardNumber(Object.assign(Object.assign({}, cardNumber), { [target.name]: target.value }));
    };
    const resetCardNumber = useCallback(() => {
        setCardNumber(Object.assign({}, initialState));
    }, []);
    const onKeyDownCardNumber = (event) => {
        var _a;
        const target = event.target;
        const { key } = event;
        const element = (_a = target.previousSibling) === null || _a === void 0 ? void 0 : _a.previousSibling;
        if (element) {
            focusPrevElement({
                target,
                key,
                element,
            });
        }
    };
    return (_jsx(CardNumberContext.Provider, Object.assign({ value: {
            state: { cardNumber, cardNumberReady },
            action: {
                onChangeCardNumber,
                onKeyDownCardNumber,
                resetCardNumber,
                setCardNumber,
            },
        } }, { children: children })));
};
export default CardNumberProvider;
//# sourceMappingURL=CardNumberProvider.js.map