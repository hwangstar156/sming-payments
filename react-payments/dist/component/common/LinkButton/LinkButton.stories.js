import { jsx as _jsx } from "react/jsx-runtime";
import LinkButton from "component/common/LinkButton/LinkButton.component";
export default {
    title: "Common/LinkButton",
    component: LinkButton,
};
export const NextLinkButton = (args) => (_jsx(LinkButton, Object.assign({}, args, { children: "\uB2E4\uC74C" })));
NextLinkButton.args = {
    type: "submit",
};
export const BackLinkButton = (args) => (_jsx(LinkButton, Object.assign({}, args, { children: "<" })));
BackLinkButton.args = {};
//# sourceMappingURL=LinkButton.stories.js.map