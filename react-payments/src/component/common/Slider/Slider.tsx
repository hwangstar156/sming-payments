import React, { MutableRefObject } from "react";
import styled from "styled-components";
import Text from "../../../styles/text";
import { RowFlexWrapper } from "../../../styles/wrapper";

const SliderContainer = styled.div`
  width: 240px;
  height: 180px;
  background-color: #f6f6f6;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 100px;
  align-items: center;
  margin-left: 15px;
`;

function Slider({
  children,
  slideRef,
  prevSlide,
  nextSlide,
}: {
  children: React.ReactNode;
  slideRef: MutableRefObject<null | HTMLDivElement>;
  prevSlide: () => void;
  nextSlide: () => void;
}) {
  return (
    <RowFlexWrapper gap="35">
      <Text
        fontSize="30px"
        fontWeight="600"
        color="#575757"
        pointer={true}
        onClick={prevSlide}
      >
        {"<"}
      </Text>
      <SliderContainer>
        <SlideContainer ref={slideRef}>{children}</SlideContainer>
      </SliderContainer>
      <Text
        fontSize="30px"
        fontWeight="600"
        color="#575757"
        pointer={true}
        onClick={nextSlide}
      >
        {">"}
      </Text>
    </RowFlexWrapper>
  );
}

export default Slider;
