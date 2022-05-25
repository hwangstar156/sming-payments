import React from "react";
import { SeveralInputType } from "types";
interface InitialContextState {
    cardPassword: SeveralInputType;
    cardPasswordReady: boolean;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onChangeCardPassword: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        onClickCardPasswordBackspaceButton: () => void;
        onClickCardPasswordVirtualKeyboard: (value: string) => void;
        resetCardPassword: () => void;
        setCardPassword: React.Dispatch<React.SetStateAction<SeveralInputType>>;
    };
}
export declare const CardPasswordContext: React.Context<InitialContextValue | null>;
declare const CardPasswordProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default CardPasswordProvider;
