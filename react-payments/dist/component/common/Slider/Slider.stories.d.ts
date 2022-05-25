import { Meta, Story } from "@storybook/react";
import React, { MutableRefObject } from "react";
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
export declare const DefaultSlider: Story<{
    children: React.ReactNode;
    slideRef: MutableRefObject<null | HTMLDivElement>;
    prevSlide: () => void;
    nextSlide: () => void;
}>;
