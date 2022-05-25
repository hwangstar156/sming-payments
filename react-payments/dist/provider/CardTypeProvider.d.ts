import React from "react";
import { CardTypeInfoType } from "types";
interface InitialContextState {
    cardTypeInfo: CardTypeInfoType;
    cardTypeReady: boolean;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onClickCardType: ({ cardType, cardName }: CardTypeInfoType) => void;
        resetCardTypeInfo: () => void;
        setCardTypeInfo: React.Dispatch<React.SetStateAction<CardTypeInfoType>>;
    };
}
export declare const CardTypeContext: React.Context<InitialContextValue | null>;
declare const CardTypeProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default CardTypeProvider;
