import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ErrorText from "component/common/ErrorText/ErrorText";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import { useEffect } from "react";
import { ColumnFlexWrapper } from "styles/wrapper";
const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (_jsxs(ColumnFlexWrapper, Object.assign({ gap: "30" }, { children: [_jsxs(ErrorText, Object.assign({ label: "\uC11C\uBC84 \uC5D0\uB7EC\uC785\uB2C8\uB2E4!" }, { children: ["\uC11C\uBC84\uC5D0 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4.", _jsx("br", {}), "\uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."] })), _jsx(LinkButton, Object.assign({ onClick: () => {
                    window.location.reload();
                } }, { children: "\uB3CC\uC544\uAC00\uAE30" }))] })));
};
export default ErrorPage;
//# sourceMappingURL=ErrorPage.pages.js.map