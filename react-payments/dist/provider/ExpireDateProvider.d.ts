import React from "react";
import { SeveralInputType } from "types";
interface InitialContextState {
    expireDate: SeveralInputType;
    expireDateReady: boolean;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onChangeExpireDate: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        onKeyDownExpireDate: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        resetExpireDate: () => void;
        setExpireDate: React.Dispatch<React.SetStateAction<SeveralInputType>>;
    };
}
export declare const ExpireDateContext: React.Context<InitialContextValue | null>;
declare const ExpireDateProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default ExpireDateProvider;
