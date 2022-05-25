import React, { MutableRefObject } from "react";
declare function Slider({ children, slideRef, prevSlide, nextSlide, }: {
    children: React.ReactNode;
    slideRef: MutableRefObject<null | HTMLDivElement>;
    prevSlide: () => void;
    nextSlide: () => void;
}): JSX.Element;
export default Slider;
