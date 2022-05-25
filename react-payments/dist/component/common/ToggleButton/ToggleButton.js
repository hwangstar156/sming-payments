import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const CheckBoxWrapper = styled.div `
  position: relative;
`;
const CheckBoxLabel = styled.label `
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 15px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input `
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 35px;
  height: 15px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
function ToggleButton({ setChecked, }) {
    const onChange = () => {
        setChecked((prev) => !prev);
    };
    return (_jsxs(CheckBoxWrapper, { children: [_jsx(CheckBox, { id: "checkbox", type: "checkbox", onChange: onChange }), _jsx(CheckBoxLabel, { htmlFor: "checkbox" })] }));
}
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map