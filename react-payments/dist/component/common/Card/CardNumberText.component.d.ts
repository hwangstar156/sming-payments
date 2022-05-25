/// <reference types="react" />
import { SeveralInputType } from "types";
interface CardNumberTextProps {
    cardNumbers: SeveralInputType;
    size?: string;
}
declare const CardNumberText: ({ cardNumbers, size }: CardNumberTextProps) => JSX.Element;
export default CardNumberText;
