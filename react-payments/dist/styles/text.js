import styled, { css } from "styled-components";
const Text = styled.div `
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ underline }) => underline &&
    css `
      text-decoration: underline #2ac1bc;
    `}
  ${({ pointer }) => pointer &&
    css `
      cursor: pointer;
    `}
`;
export default Text;
//# sourceMappingURL=text.js.map