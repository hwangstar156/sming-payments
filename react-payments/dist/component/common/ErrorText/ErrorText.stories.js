import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ErrorText from "./ErrorText";
export default {
    title: "Common/ErrorText",
    component: ErrorText,
};
export const NetworkErrorText = (args) => (_jsxs(ErrorText, Object.assign({}, args, { children: ["\uC11C\uBC84\uC5D0 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4.", _jsx("br", {}), "\uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"] })));
NetworkErrorText.args = {
    label: "서버 에러입니다!",
};
export const RouteErrorText = (args) => (_jsx(ErrorText, Object.assign({}, args, { children: "\uC5C6\uB294 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4." })));
RouteErrorText.args = {
    label: "404 에러!",
};
//# sourceMappingURL=ErrorText.stories.js.map