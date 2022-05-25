import React from "react";
import { SeveralInputType } from "types";
interface InitialContextState {
    cardNumber: SeveralInputType;
    cardNumberReady: boolean;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onChangeCardNumber: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        onKeyDownCardNumber: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        resetCardNumber: () => void;
        setCardNumber: React.Dispatch<React.SetStateAction<SeveralInputType>>;
    };
}
export declare const CardNumberContext: React.Context<InitialContextValue | null>;
declare const CardNumberProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default CardNumberProvider;
