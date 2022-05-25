interface FocusParams {
    target: HTMLInputElement;
    element: HTMLInputElement;
}
interface PrevFocusParams extends FocusParams {
    key: string;
}
interface NextFocusParams extends FocusParams {
    maxLength: number;
    value: {
        [key: string]: string;
    };
}
export declare const focusNextElement: ({ target, value, maxLength, element, }: NextFocusParams) => void;
export declare const focusPrevElement: ({ target, key, element }: PrevFocusParams) => void;
export {};
