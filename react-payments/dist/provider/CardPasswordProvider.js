import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import useReady from "hooks/useReady";
import { isCompletePasswordInput, isInValidCardPassword } from "util/validator";
export const CardPasswordContext = createContext(null);
const initialState = {
    first: "",
    second: "",
};
const CardPasswordProvider = ({ children }) => {
    const [cardPassword, setCardPassword] = useState(initialState);
    const [cardPasswordReady] = useReady(cardPassword, isInValidCardPassword);
    const onChangeCardPassword = ({ target }) => {
        setCardPassword({
            [target.name]: target.value,
        });
    };
    const onClickCardPasswordVirtualKeyboard = (value) => {
        if (isCompletePasswordInput(cardPassword)) {
            return;
        }
        setCardPassword((prev) => {
            if (prev.first === "") {
                return Object.assign(Object.assign({}, prev), { first: prev.first + value });
            }
            return Object.assign(Object.assign({}, prev), { second: prev.second + value });
        });
    };
    const onClickCardPasswordBackspaceButton = () => {
        setCardPassword((prev) => {
            if (prev.second === "") {
                return Object.assign(Object.assign({}, prev), { first: prev.first.slice(0, -1) });
            }
            return Object.assign(Object.assign({}, prev), { second: prev.second.slice(0, -1) });
        });
    };
    const resetCardPassword = useCallback(() => {
        setCardPassword(Object.assign({}, initialState));
    }, []);
    return (_jsx(CardPasswordContext.Provider, Object.assign({ value: {
            state: { cardPassword, cardPasswordReady },
            action: {
                onChangeCardPassword,
                onClickCardPasswordBackspaceButton,
                onClickCardPasswordVirtualKeyboard,
                resetCardPassword,
                setCardPassword,
            },
        } }, { children: children })));
};
export default CardPasswordProvider;
//# sourceMappingURL=CardPasswordProvider.js.map