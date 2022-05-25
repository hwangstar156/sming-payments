/// <reference types="react" />
export interface LinkButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent) => void;
    type?: "submit" | "button" | undefined;
}
declare const LinkButton: ({ children, onClick, type }: LinkButtonProps) => JSX.Element;
export default LinkButton;
