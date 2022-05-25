import { FormTypeEnum } from "types";
export interface InputBoxProps {
    formType: keyof typeof FormTypeEnum;
}
declare const InputBox: import("styled-components").StyledComponent<"div", any, InputBoxProps, never>;
export default InputBox;
