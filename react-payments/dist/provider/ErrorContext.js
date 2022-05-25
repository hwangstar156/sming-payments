import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
export const ErrorContext = createContext(null);
const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error) {
            throw new Error(error.message);
        }
    }, [error]);
    return (_jsx(ErrorContext.Provider, Object.assign({ value: { error, setError } }, { children: children })));
};
export default ErrorProvider;
//# sourceMappingURL=ErrorContext.js.map