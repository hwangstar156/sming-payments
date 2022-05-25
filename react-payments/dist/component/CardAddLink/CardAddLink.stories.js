import { jsx as _jsx } from "react/jsx-runtime";
import CardAddLink from "./CardAddLink.component";
export default {
    title: "CardAddLink",
    component: CardAddLink,
};
const Template = (args) => (_jsx(CardAddLink, Object.assign({}, args, { to: "/add" }, { children: "+" })));
export const DefaultCardAddLink = Template.bind({});
DefaultCardAddLink.args = {};
//# sourceMappingURL=CardAddLink.stories.js.map