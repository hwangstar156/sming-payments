import { jsx as _jsx } from "react/jsx-runtime";
import MessageBox from "component/common/MessageBox/MessageBox.component";
export default {
    title: "Common/MessageBox",
    component: MessageBox,
};
export const ErrorMessageBox = (args) => _jsx(MessageBox, Object.assign({}, args, { children: "\uC5D0\uB7EC\uC785\uB2C8\uB2E4" }));
ErrorMessageBox.args = {
    styleType: "error",
};
export const SuccessMessageBox = (args) => _jsx(MessageBox, Object.assign({}, args, { children: "\uC131\uACF5\uC785\uB2C8\uB2E4" }));
SuccessMessageBox.args = {
    styleType: "success",
};
//# sourceMappingURL=MessageBox.stories.js.map