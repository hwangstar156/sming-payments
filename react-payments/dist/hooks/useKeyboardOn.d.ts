import React from "react";
declare const useKeyboardOn: (ready: boolean) => {
    keyboardOn: boolean;
    openKeyboard: () => void;
    closeKeyboard: () => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export default useKeyboardOn;
