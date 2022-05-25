import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { ColumnFlexWrapper } from "styles/wrapper";
const ErrorTitle = styled.div `
  color: tomato;
  font-size: 45px;
  font-weight: 600;
`;
const ErrorDescription = styled.div `
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1rem;
`;
const ErrorText = ({ label, children }) => {
    return (_jsxs(ColumnFlexWrapper, Object.assign({ gap: "50", mt: "100" }, { children: [_jsx(ErrorTitle, { children: label }), _jsx(ErrorDescription, { children: children })] })));
};
export default ErrorText;
//# sourceMappingURL=ErrorText.js.map