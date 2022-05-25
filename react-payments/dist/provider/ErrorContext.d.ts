import React from "react";
interface InitialContextValue {
    error: null | Error;
    setError: React.Dispatch<React.SetStateAction<null | Error>>;
}
export declare const ErrorContext: React.Context<InitialContextValue | null>;
declare const ErrorProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default ErrorProvider;
