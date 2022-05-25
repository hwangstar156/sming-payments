import { Component } from "react";
declare type Props = {
    fallback: React.ReactNode;
    children?: React.ReactNode;
};
declare type State = {
    hasError: boolean;
};
declare class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    render(): import("react").ReactNode;
}
export default ErrorBoundary;
