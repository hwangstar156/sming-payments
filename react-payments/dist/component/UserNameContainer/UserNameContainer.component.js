import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import { UserNameContext } from "provider/UserNameProvider";
const UserNameContainer = memo(() => {
    const userNameContext = useContext(UserNameContext);
    if (!userNameContext) {
        throw new Error("Cannot find UserNameContext");
    }
    const { state: { userName }, action: { onChangeUserName }, } = userNameContext;
    return (_jsxs(_Fragment, { children: [_jsxs(Label, Object.assign({ styleType: "user-name" }, { children: [_jsx("div", { children: "\uCE74\uB4DC \uC18C\uC720\uC790 \uC774\uB984(\uC120\uD0DD)" }), _jsx("div", { children: `${userName.length}/30` })] })), _jsx(InputBox, Object.assign({ formType: "user-name" }, { children: _jsx(Input, { type: "text", placeholder: "\uCE74\uB4DC\uC5D0 \uD45C\uC2DC\uB41C \uC774\uB984\uACFC \uB3D9\uC77C\uD558\uAC8C \uC785\uB825\uD558\uC138\uC694.", value: userName, onChange: onChangeUserName, "data-testid": "card-user" }) }))] }));
});
export default UserNameContainer;
//# sourceMappingURL=UserNameContainer.component.js.map