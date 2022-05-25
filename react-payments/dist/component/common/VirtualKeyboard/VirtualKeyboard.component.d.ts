/// <reference types="react" />
export interface VirtualKeyboardProps {
    onClickVirtualKeyboard: (value: string) => void;
    onClickBackspaceButton: () => void;
    onClickCloseButton: () => void;
}
declare const VirtualKeyboard: ({ onClickVirtualKeyboard, onClickCloseButton, onClickBackspaceButton, }: VirtualKeyboardProps) => JSX.Element;
export default VirtualKeyboard;
