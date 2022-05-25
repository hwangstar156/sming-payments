import { jsx as _jsx } from "react/jsx-runtime";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
export default {
    title: "CardNameInput",
    component: CardNameInput,
};
const Template = (args) => (_jsx(CardNameInput, Object.assign({}, args)));
export const DefaultCardNameInput = Template.bind({});
DefaultCardNameInput.args = {
    ready: true,
};
export const SmallCardNameInput = Template.bind({});
SmallCardNameInput.args = {
    styleSize: "small",
    ready: true,
};
//# sourceMappingURL=CardNameInput.stories.js.map