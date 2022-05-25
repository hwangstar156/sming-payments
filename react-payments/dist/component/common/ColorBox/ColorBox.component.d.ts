/// <reference types="react" />
import { CardType, CardTypeInfoType } from "types";
export interface ColorBoxProps extends CardTypeInfoType {
    onClickCardType: ({ cardType, cardName }: CardTypeInfoType) => void;
    currentCardType: CardType;
}
declare const ColorBox: ({ cardType, cardName, onClickCardType, currentCardType, }: ColorBoxProps) => JSX.Element;
export default ColorBox;
