import styled from "styled-components";
const MessageBox = styled.div `
  margin-top: 10px;
  font-size: 12px;
  color: ${({ styleType, theme }) => styleType === "success"
    ? theme.colors.successMessage
    : theme.colors.errorMessage};
`;
export default MessageBox;
//# sourceMappingURL=MessageBox.component.js.map