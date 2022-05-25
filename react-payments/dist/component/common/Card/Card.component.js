import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import CardNumberText from "component/common/Card/CardNumberText.component";
import { ColumnFlexWrapper } from "styles/wrapper";
import { RowFlexWrapper } from "styles/wrapper";
const CardTop = styled.div `
  width: 100%;
  height: 100%;
  font-size: 10px;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;
const CardMiddle = styled.div `
  width: 100%;
  height: 100%;
  margin-left: 30px;
  margin-bottom: 5px;
  transform: translate(0, 5px);
  display: flex;
  align-items: center;
`;
const CardChip = styled.div `
  left: 95px;
  top: 122px;

  background: ${({ theme }) => theme.colors.cardChip};
  border-radius: 4px;

  ${({ size }) => {
    switch (size) {
        case "big":
            return css `
          width: 55.04px;
          height: 35.77px;
        `;
        case "small":
            return css `
          width: 23px;
          height: 13px;
        `;
        default:
            return css `
          width: 40px;
          height: 26px;
        `;
    }
}}
`;
const CardBox = styled(ColumnFlexWrapper) `
  font-size: 30px;
  color: ${({ theme }) => theme.colors.cardText};

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;

  background: ${({ theme, cardType }) => theme.colors[cardType] || theme.colors.defaultCard};

  ${({ size }) => {
    switch (size) {
        case "big":
            return css `
          width: 290px;
          height: 180px;
        `;
        case "small":
            return css `
          width: 230px
          height: 150px;
        `;
        default:
            return css `
          width: 208px;
          height: 130px;
        `;
    }
}}
`;
const CardContainer = styled(RowFlexWrapper) `
  margin: 10px 0;
  cursor: pointer;
`;
const CardBottom = styled.div `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardBottomInfo = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  transform: translate(0, -7px);
  align-items: center;
  justify-content: space-between;
`;
const CardText = styled.span `
  margin: 0 16px;

  ${({ size }) => {
    switch (size) {
        case "big":
            return css `
          font-size: 18px;
          line-height: 20px;
        `;
        case "small":
            return css `
          width: 10px;
          height: 13px;
        `;
        default:
            return css `
          font-size: 12px;
          line-height: 16px;
        `;
    }
}}

  vertical-align: middle;
  font-weight: 400;
`;
const Card = ({ userName, month, year, cardNumber, cardTypeInfo, onClick, size, }) => {
    return (_jsx(CardContainer, Object.assign({ onClick: onClick, "data-testid": "card" }, { children: _jsxs(CardBox, Object.assign({ cardType: cardTypeInfo.cardType, size: size }, { children: [_jsx(CardTop, { children: cardTypeInfo.cardName }), _jsx(CardMiddle, { children: _jsx(CardChip, { size: size }) }), _jsxs(CardBottom, { children: [_jsx(CardNumberText, { cardNumbers: cardNumber, size: size }), _jsxs(CardBottomInfo, { children: [_jsx(CardText, { children: userName }), _jsxs(CardText, Object.assign({ size: size }, { children: [month, " / ", year] }))] })] })] })) })));
};
export default Card;
//# sourceMappingURL=Card.component.js.map