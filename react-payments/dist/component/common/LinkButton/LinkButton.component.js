import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
const StyledButton = styled.button `
  cursor: pointer;
  background: transparent;
  border: none;
  ${({ type }) => type === "submit"
    ? css `
          font-weight: 700;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.defaultText};
          align-self: flex-end;
        `
    : css `
          font-weight: 500;
          font-size: 22px;
          color: ${({ theme }) => theme.colors.header};
        `}
`;
const LinkButton = ({ children, onClick, type }) => {
    return (_jsx(StyledButton, Object.assign({ onClick: onClick, type: type }, { children: children })));
};
export default LinkButton;
//# sourceMappingURL=LinkButton.component.js.map