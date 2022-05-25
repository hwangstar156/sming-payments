import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import Dot from "component/common/Dot/Dot.component";
const ColorBoxContainer = styled.div `
  height: 62px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
const ColorBoxText = styled.div `
  font-size: 12px;
  ${({ currentCardType, cardType }) => currentCardType === cardType &&
    css `
      color: #00bcd4;
      text-decoration: underline;
    `};
`;
const ColorBox = ({ cardType, cardName, onClickCardType, currentCardType, }) => {
    return (_jsxs(ColorBoxContainer, Object.assign({ "data-testid": "color-box", onClick: () => onClickCardType({ cardType, cardName }) }, { children: [_jsx(Dot, { styleSize: "huge", cardType: cardType }), _jsx(ColorBoxText, Object.assign({ currentCardType: currentCardType, cardType: cardType }, { children: cardName }))] })));
};
export default ColorBox;
//# sourceMappingURL=ColorBox.component.js.map