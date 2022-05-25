import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import { isOverMaxLength } from "util/validator";
import { MAX_LENGTH } from "constants/index";
export const UserNameContext = createContext(null);
const initialState = "";
const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState(initialState);
    const onChangeUserName = ({ target }) => {
        if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
            return;
        }
        setUserName(target.value);
    };
    const resetUserName = useCallback(() => {
        setUserName(initialState);
    }, []);
    return (_jsx(UserNameContext.Provider, Object.assign({ value: {
            state: { userName },
            action: { onChangeUserName, resetUserName, setUserName },
        } }, { children: children })));
};
export default UserNameProvider;
//# sourceMappingURL=UserNameProvider.js.map