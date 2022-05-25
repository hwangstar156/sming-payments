import { jsx as _jsx } from "react/jsx-runtime";
import PageTitle from "component/common/PageTitle/PageTitle.component";
export default {
    title: "Common/PageTitle",
    component: PageTitle,
};
export const CardAddPageTitle = (args) => (_jsx(PageTitle, Object.assign({}, args, { children: "\uCE74\uB4DC \uCD94\uAC00" })));
CardAddPageTitle.args = {
    styleType: "header",
};
export const CardRegisterConfirmTitle = (args) => _jsx(PageTitle, Object.assign({}, args, { children: "\uCE74\uB4DC \uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }));
CardRegisterConfirmTitle.args = {};
//# sourceMappingURL=PageTitle.stories.js.map