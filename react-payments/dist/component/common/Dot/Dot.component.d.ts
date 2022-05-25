/// <reference types="react" />
import { CardType } from "types";
export interface DotProps {
    styleSize?: string;
    formType?: string;
    cardType?: CardType;
}
declare const Dot: (props: DotProps) => JSX.Element;
export default Dot;
