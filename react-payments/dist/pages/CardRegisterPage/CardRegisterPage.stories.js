import { jsx as _jsx } from "react/jsx-runtime";
import { action } from "@storybook/addon-actions";
import { withReactContext } from "storybook-react-context";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage.pages";
import { CardNumberContext } from "provider/CardNumberProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { UserNameContext } from "provider/UserNameProvider";
import { CardTypeContext } from "provider/CardTypeProvider";
import { mockCardNumber, mockCardPassword, mockCardTypeInfo, mockExpireDate, mockSecurityCode, mockUserName, } from "mock/cardInput";
export default {
    title: "Pages/CardRegisterPage",
    component: CardRegisterPage,
    decorators: [
        withReactContext({
            Context: CardNumberContext,
            initialState: Object.assign(Object.assign({}, mockCardNumber), { action: {
                    resetCardNumber: action("reset-cardNumber"),
                } }),
        }),
        withReactContext({
            Context: ExpireDateContext,
            initialState: Object.assign(Object.assign({}, mockExpireDate), { action: {
                    resetExpireDate: action("reset-expireDate"),
                } }),
        }),
        withReactContext({
            Context: UserNameContext,
            initialState: Object.assign(Object.assign({}, mockUserName), { action: {
                    resetUserName: action("reset-userName"),
                } }),
        }),
        withReactContext({
            Context: SecurityCodeContext,
            initialState: Object.assign(Object.assign({}, mockSecurityCode), { action: {
                    resetSecurityCode: action("reset-securityCode"),
                } }),
        }),
        withReactContext({
            Context: CardPasswordContext,
            initialState: Object.assign(Object.assign({}, mockCardPassword), { action: {
                    resetCardPassword: action("reset-cardPassword"),
                } }),
        }),
        withReactContext({
            Context: CardTypeContext,
            initialState: Object.assign(Object.assign({}, mockCardTypeInfo), { action: {
                    resetCardTypeInfo: action("reset-cardTypeInfo"),
                } }),
        }),
    ],
};
const Template = (args) => _jsx(CardRegisterPage, Object.assign({}, args));
export const DefaultCardRegisterPage = Template.bind({});
DefaultCardRegisterPage.args = {};
//# sourceMappingURL=CardRegisterPage.stories.js.map