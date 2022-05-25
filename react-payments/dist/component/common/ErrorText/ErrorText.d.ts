/// <reference types="react" />
export interface ErrorTextProps {
    label: string;
    children: React.ReactNode;
}
declare const ErrorText: ({ label, children }: ErrorTextProps) => JSX.Element;
export default ErrorText;
