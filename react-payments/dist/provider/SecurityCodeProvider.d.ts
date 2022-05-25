import React from "react";
import { SecurityCodeType } from "types";
interface InitialContextState {
    securityCode: SecurityCodeType;
    securityCodeReady: boolean;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onChangeSecurityCode: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        onClickSecurityVirtualKeyboard: (value: string) => void;
        onClickSecurityBackspaceButton: () => void;
        resetSecurityCode: () => void;
        setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
    };
}
export declare const SecurityCodeContext: React.Context<InitialContextValue | null>;
declare const SecurityCodeProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default SecurityCodeProvider;
