import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import { RowFlexWrapper } from "styles/wrapper";
const StyledDot = styled.div `
  border-radius: 50%;
  ${({ styleSize }) => styleSize === "huge"
    ? css `
          width: 37px;
          height: 37px;
        `
    : css `
          width: 5px;
          height: 5px;
        `}
  background: ${({ theme, cardType }) => cardType ? theme.colors[cardType] : theme.colors.cardText}
`;
const StyledDotBox = styled(RowFlexWrapper) `
  ${({ formType, styleSize }) => styleSize === "small" &&
    (formType === "card-password"
        ? css `
          width: 43px;
          height: 43px;
        `
        : css `
          width: 9px;
          height: 9px;
        `)}
`;
const Dot = (props) => {
    return (_jsx(StyledDotBox, Object.assign({}, props, { children: _jsx(StyledDot, Object.assign({}, props)) })));
};
export default Dot;
//# sourceMappingURL=Dot.component.js.map