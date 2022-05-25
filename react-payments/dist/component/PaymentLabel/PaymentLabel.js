import styled, { css } from "styled-components";
const PaymentLabel = styled.div `
  font-size: 16px;
  border-bottom: 3px solid #dddddd;

  ${({ styleType }) => styleType === "holding-card" &&
    css `
      display: inline-block;
      border-bottom-color: "#dddddda0";
      margin-bottom: 40px;
    `};
`;
export default PaymentLabel;
//# sourceMappingURL=PaymentLabel.js.map