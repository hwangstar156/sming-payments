import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const KeyBoard = styled.div `
  background: ${({ theme }) => theme.colors.keyboard};
  border-radius: 4px;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  text-align: center;
  font-size: 17px;
  line-height: 32px;
  color: white;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.keyboardHover};
  }
`;
const KeyBoardContainer = styled.div `
  width: 128px;
  display: grid;
  position: absolute;
  left: 5px;
  top: 5px;
  transform: translate(10%, 40%);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 6px;
  border: 4px solid ${({ theme }) => theme.colors.keyboard};
  z-index: 3;
`;
const getShuffleArray = () => {
    const keyboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return keyboardArray.sort((_) => Math.random() - 0.5);
};
const VirtualKeyboard = ({ onClickVirtualKeyboard, onClickCloseButton, onClickBackspaceButton, }) => {
    const keyboardArray = getShuffleArray();
    return (_jsxs(KeyBoardContainer, { children: [keyboardArray.map((keyboard, idx) => (_jsx(KeyBoard, Object.assign({ "data-testid": keyboard, onClick: () => onClickVirtualKeyboard(keyboard) }, { children: keyboard }), idx))), _jsx(KeyBoard, Object.assign({ onClick: onClickBackspaceButton, "data-testid": "\u2B05\uFE0F" }, { children: "\u2B05\uFE0F" })), _jsx(KeyBoard, Object.assign({ onClick: onClickCloseButton, "data-testid": "X" }, { children: "X" }))] }));
};
export default VirtualKeyboard;
//# sourceMappingURL=VirtualKeyboard.component.js.map