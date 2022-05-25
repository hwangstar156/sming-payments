import React from "react";
import { UserNameType } from "types";
interface InitialContextState {
    userName: UserNameType;
}
interface InitialContextValue {
    state: InitialContextState;
    action: {
        onChangeUserName: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        resetUserName: () => void;
        setUserName: React.Dispatch<React.SetStateAction<string>>;
    };
}
export declare const UserNameContext: React.Context<InitialContextValue | null>;
declare const UserNameProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default UserNameProvider;
