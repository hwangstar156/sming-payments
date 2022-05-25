import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import { isInValidExpireDate, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import { MAX_LENGTH } from "constants/index";
import useReady from "hooks/useReady";
export const ExpireDateContext = createContext(null);
const initialState = {
    month: "",
    year: "",
};
const ExpireDateProvider = ({ children }) => {
    const [expireDate, setExpireDate] = useState(initialState);
    const [expireDateReady] = useReady(expireDate, isInValidExpireDate);
    const onChangeExpireDate = ({ target }) => {
        var _a;
        if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
            return;
        }
        const element = (_a = target.nextSibling) === null || _a === void 0 ? void 0 : _a.nextSibling;
        if (element) {
            focusNextElement({
                target,
                value: expireDate,
                maxLength: MAX_LENGTH.EXPIRE_DATE,
                element,
            });
        }
        setExpireDate(Object.assign(Object.assign({}, expireDate), { [target.name]: target.value }));
    };
    const onKeyDownExpireDate = (event) => {
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
    const resetExpireDate = useCallback(() => {
        setExpireDate(Object.assign({}, initialState));
    }, []);
    return (_jsx(ExpireDateContext.Provider, Object.assign({ value: {
            state: { expireDate, expireDateReady },
            action: {
                onChangeExpireDate,
                onKeyDownExpireDate,
                resetExpireDate,
                setExpireDate,
            },
        } }, { children: children })));
};
export default ExpireDateProvider;
//# sourceMappingURL=ExpireDateProvider.js.map