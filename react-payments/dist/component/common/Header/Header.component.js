import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import Box from "styles/box";
const Header = memo(({ children }) => {
    return (_jsx(Box, Object.assign({ display: "flex", gap: "25px", alignItems: "center" }, { children: children })));
});
export default Header;
//# sourceMappingURL=Header.component.js.map