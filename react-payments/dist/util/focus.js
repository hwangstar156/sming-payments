export const focusNextElement = ({ target, value, maxLength, element, }) => {
    if (isNextFocus({ target, value, maxLength, element })) {
        element.focus();
    }
};
export const focusPrevElement = ({ target, key, element }) => {
    if (isPrevFocus({ target, key, element })) {
        element.focus();
    }
};
const isNextFocus = ({ target, value, maxLength, element, }) => {
    return (value[target.name].length < target.value.length &&
        target.value.length === maxLength &&
        element);
};
const isPrevFocus = ({ target, key, element }) => {
    return key === "Backspace" && target.value.length === 0 && element;
};
//# sourceMappingURL=focus.js.map