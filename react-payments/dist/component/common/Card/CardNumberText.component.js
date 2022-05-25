import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import Dot from "component/common/Dot/Dot.component";
import { MIDDLE_CARD_NUMBER_LENGTH } from "constants/index";
import { RowFlexWrapper } from "styles/wrapper";
import { CardNumberEnum, getProperty } from "types";
const CardNumberTextBox = styled.div `
  display: flex;
  vertical-align: middle;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ size }) => {
    switch (size) {
        case "big":
            return css `
          font-size: 18px;
          gap: 16px;
          letter-spacing: 5px;
        `;
        case "small":
            return css `
          font-size: 10px;
          gap: 6px;
          letter-spacing: 1px;
        `;
        default:
            return css `
          font-size: 14px;
          gap: 10px;
          letter-spacing: 3px;
        `;
    }
}}

  ${({ size }) => (size === "big" ? css `` : css ``)}
`;
const CardNumberText = ({ cardNumbers, size }) => {
    return (_jsx(CardNumberTextBox, Object.assign({ size: size }, { children: Object.entries(cardNumbers)
            .sort(([key, _], [newKey, __]) => getProperty(CardNumberEnum, key) -
            getProperty(CardNumberEnum, newKey))
            .map(([_, cardNumber], idx) => {
            if (idx >= MIDDLE_CARD_NUMBER_LENGTH) {
                return (_jsx(RowFlexWrapper, { children: Array.from(cardNumber).map((_, idx) => (_jsx(Dot, { styleSize: "small", formType: "card-number" }, idx))) }, idx));
            }
            return _jsx("div", { children: cardNumber }, idx);
        }) })));
};
export default CardNumberText;
//# sourceMappingURL=CardNumberText.component.js.map