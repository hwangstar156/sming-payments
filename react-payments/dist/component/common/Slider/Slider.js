import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Text from "styles/text";
import { RowFlexWrapper } from "styles/wrapper";
const SliderContainer = styled.div `
  width: 240px;
  height: 160px;
  background-color: #f6f6f6;
  overflow: hidden;
  padding: 10px;
`;
const SlideContainer = styled.div `
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  gap: 100px;
  margin-left: 15px;
  align-items: center;
`;
function Slider({ children, slideRef, prevSlide, nextSlide, }) {
    return (_jsxs(RowFlexWrapper, Object.assign({ gap: "35" }, { children: [_jsx(Text, Object.assign({ fontSize: "30px", fontWeight: "600", color: "#575757", pointer: true, onClick: prevSlide }, { children: "<" })), _jsx(SliderContainer, { children: _jsx(SlideContainer, Object.assign({ ref: slideRef }, { children: children })) }), _jsx(Text, Object.assign({ fontSize: "30px", fontWeight: "600", color: "#575757", pointer: true, onClick: nextSlide }, { children: ">" }))] })));
}
export default Slider;
//# sourceMappingURL=Slider.js.map