import { jsx as _jsx } from "react/jsx-runtime";
import Card from "component/common/Card/Card.component";
import { cardInfos, defaultCardInfo } from "constants/index";
import { action } from "@storybook/addon-actions";
const COMPLETE_CARD_INFO = {
    cardNumber: {
        first: "1111",
        second: "2345",
        third: "2345",
        fourth: "2524",
    },
    userName: "SMING",
    month: "09",
    year: "99",
};
const INCOMPLETE_CARD_INFO = {
    cardNumber: {
        first: "1111",
        second: "2345",
        third: "234",
        fourth: "",
    },
    userName: "UYEON",
    month: "05",
    year: "00",
};
export default {
    title: "Common/Card",
    component: Card,
};
const Template = (args) => _jsx(Card, Object.assign({}, args));
export const DefaultCard = Template.bind({});
DefaultCard.args = Object.assign(Object.assign({}, COMPLETE_CARD_INFO), { onClick: action("onClick"), cardTypeInfo: defaultCardInfo });
export const IncompleteCard = Template.bind({});
IncompleteCard.args = Object.assign(Object.assign({}, INCOMPLETE_CARD_INFO), { onClick: action("onClick"), cardTypeInfo: defaultCardInfo });
export const PocoCard = Template.bind({});
PocoCard.args = Object.assign(Object.assign({}, COMPLETE_CARD_INFO), { onClick: action("onClick"), cardTypeInfo: cardInfos[0] });
export const JunCard = Template.bind({});
JunCard.args = Object.assign(Object.assign({}, COMPLETE_CARD_INFO), { onClick: action("onClick"), cardTypeInfo: cardInfos[1] });
export const GongwonCard = Template.bind({});
GongwonCard.args = Object.assign(Object.assign({}, COMPLETE_CARD_INFO), { onClick: action("onClick"), cardTypeInfo: cardInfos[2] });
export const BigCard = Template.bind({});
BigCard.args = Object.assign(Object.assign({}, COMPLETE_CARD_INFO), { onClick: action("onClick"), size: "big", cardTypeInfo: cardInfos[2] });
//# sourceMappingURL=Card.stories.js.map