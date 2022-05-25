import { jsx as _jsx } from "react/jsx-runtime";
import CardPreview from "component/CardPreview/CardPreview.component";
export default {
    title: "CardPreview",
    component: CardPreview,
};
const Template = (args) => _jsx(CardPreview, Object.assign({}, args));
export const DefaultCardPreview = Template.bind({});
DefaultCardPreview.args = {
    cardDatum: {
        id: "0",
        attributes: {
            cardName: "우연 카드",
            cardNumber: {
                first: "1112",
                fourth: "3142",
                second: "3213",
                third: "2321",
            },
            cardTypeInfo: {
                cardType: "branCard",
                cardName: "브랜 카드",
            },
            cardPassword: {
                first: "1",
                second: "2",
            },
            securityCode: "123",
            month: "11",
            year: "12",
            userName: "우연",
        },
    },
};
//# sourceMappingURL=CardPreview.stories.js.map